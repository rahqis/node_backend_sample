const Blog = require("../models/blog");

postBlog = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a blog"
    });
  }

  console.log(body);
  const blog = new Blog(body);

  if (!blog) {
    return res.status(400).json({ success: false, error: err });
  }

  blog
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: blog._id,
        text: blog.text,
        message: "Blog post created!"
      });
    })
    .catch((error) => {
      console.log(blog);
      return res.status(400).json({
        error,
        message: "Blog post not created!"
      });
    });
};

module.exports = postBlog;
