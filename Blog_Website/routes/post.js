const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const Comment = require("../models/comment");
const moment = require("moment");
const PDFDocument = require('pdfkit');
const { convert } = require('html-to-text');
const axios = require('axios');

// Helper function to download image
const downloadImage = async (url) => {
  try {
    const response = await axios({ url, responseType: 'arraybuffer' });
    return Buffer.from(response.data, 'binary');
  } catch (error) {
    console.error(`Failed to download image from ${url}`, error);
    return null;
  }
};

// Helper function to add content to PDF
const addContentToPDF = async (doc, content, images) => {
  const textContent = convert(content, { wordwrap: 130 });

  // Add text content
  doc.fontSize(12).text(textContent, { align: 'justify', color: 'black' });

  // Add images
  for (const imgUrl of images) {
    const imgBuffer = await downloadImage(imgUrl);
    if (imgBuffer) {
      doc.addPage();
      doc.image(imgBuffer, { fit: [500, 500], align: 'center', valign: 'center' });
    }
  }
};

// GET - /blog route
router.get("/blog", async (req, res) => {
  const posts = await Post.find({});
  res.render("posts/home", { posts, titleTag: "All Blog Posts" });
});

// GET - /blog/new
router.get("/blog/new", (req, res) => {
  res.render("posts/addnewPost", { titleTag: "Add New Post" });
});

// POST - /blog
router.post("/blog", async (req, res) => {
  const newPost = {
    ...req.body,
    postedOn: moment().format("MMMM Do YYYY"),
  };

  await Post.create(newPost);
  res.redirect("/blog");
});

// GET - /blog/:id
router.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("comments");
  res.render("posts/post", { post, titleTag: `${post.title}` });
});

// GET - /blog/:id/edit
router.get("/blog/:id/edit", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.render("posts/editPost", { post, titleTag: `Edit Post | ${post.title}` });
});

// PATCH - /blog/:id
router.patch("/blog/:id", async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndUpdate(id, req.body);
  res.redirect(`/blog/${id}`);
});

// DELETE - /blog/:id
router.delete("/blog/:id", async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.redirect("/blog");
});

// POST - /blog/:id/comment
router.post("/blog/:id/comment", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  const comment = new Comment(req.body);

  post.comments.push(comment);

  await comment.save();
  await post.save();

  res.redirect(`/blog/${id}`);
});

// GET - /blog/:id/download
router.get('/blog/:id/download', async (req, res) => {
  const { id } = req.params;
  const format = req.query.format;
  const post = await Post.findById(id);
  
  const blogTitle = post.title.replace(/[^a-zA-Z0-9 ]/g, ' ').trim(); // Sanitize filename and title
  const blogAuthor = post.author;
  const blogPostedOn = post.postedOn;
  const blogContent = post.postBody;
  const images = post.img_urls || []; // Use img_urls field

  if (format === 'pdf') {
    const doc = new PDFDocument();

    // Add title page
    doc.fontSize(24).fillColor('blue').text(blogTitle, { align: 'center' });
    doc.fontSize(12).fillColor('black').text(`By ${blogAuthor} on ${blogPostedOn}`, { align: 'center' });
    doc.moveDown();

    // Add content and images
    await addContentToPDF(doc, blogContent, images);

    // Finalize PDF and send response
    const buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      res.writeHead(200, {
        'Content-Length': Buffer.byteLength(pdfData),
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${blogTitle}.pdf"`
      }).end(pdfData);
    });
    doc.end();
  } else {
    res.status(400).send('Invalid format');
  }
});

module.exports = router;
