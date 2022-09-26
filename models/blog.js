const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blog = new Schema({
  id: { type: String, required: true },
  text: { type: String, requred: true },
  comments: [{ body: String }]
});

// Blog.set("validateBeforeSave", false);
module.exports = mongoose.model("blog", Blog);
