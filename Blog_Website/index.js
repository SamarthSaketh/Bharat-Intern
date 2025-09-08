require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db");
const seedDB = require("./seed");
const postRoutes = require("./routes/post");
const methodOverride = require("method-override");

// ===== DATABASE =====
connectDB();

// seed the database
// seedDB();

// ===== Config =====
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ===== Routes =====
// Homepage
app.get("/", (req, res) => {
  res.render("index", { titleTag: "Homepage" });
});

// Post Routes
app.use(postRoutes);

app.post('/blog/:id/comment', (req, res) => {
    const { user, comment } = req.body;
    const postId = req.params.id;

    // Validate input
    if (!user || !comment) {
        return res.status(400).send('Username and comment are required.');
    }

    // Create a new comment
    const newComment = new Comment({ user, comment, postId });

    newComment.save()
        .then(() => {
            // Redirect or send response
            res.redirect(`/blog/${postId}`);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error saving comment.');
        });
});

// server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server running at port : ", port);
});
