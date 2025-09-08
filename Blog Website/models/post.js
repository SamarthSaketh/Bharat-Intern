const mongoose = require("mongoose");
const Comment = require("./comment");

const postSchema = new mongoose.Schema({
  postedOn: {
    type: String,
  },
  img_url: {
    type: String,
  },
  author: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  postBody: {
    type: String,
  },
  postSummary: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
