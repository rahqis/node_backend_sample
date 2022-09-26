const Blog = require("../models/blog");

getBlogs = async (req, res) => {
  await Blog.find({}, (err, blog) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!blog.length) {
      return res.status(404).json({ success: false, error: `Blog not found` });
    }
    let id = req.path.split("/")[2];
    console.log(id);
    for (let i = 0; i < blog.length; i++) {
      if (id == blog[i].id) {
        console.log(blog[i]);
        return res.status(200).json({ success: true, data: blog[i] });
      }
    }
    return res.status(404).json({ success: false, error: `Blog not found` });
  }).catch((err) => console.log(err));
};

module.exports = getBlogs;
