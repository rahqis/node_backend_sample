const getBlogs = require("./getBlogs");
const Blog = require("../models/blog");

postComment = async (req, res) => {
  const id = req.path.split("/")[3];
  const body = req.body;
  if (!body) {
    res.status(200).json({
      success: true,
      error: "SET UP GETTING COMMENTS"
    });
  }
  await Blog.find({}, (err, blog) => {
    //console.log(blog);
    console.log(id);
    let found = false;
    for (let i = 0; i < blog.length; i++) {
      if (id == blog[i].id) {
        found = true;
        console.log(body);
        blog[i].comments.push({ body: body.comment });
        blog[i].save().then(() => {
          console.log(blog[i]);
          console.log(req);
          console.log(body);
          return res
            .status(200)
            .json({ success: true, data: blog[i].comments });
        });
      }
    }
    if (!found) {
      return res.status(404).json({ success: false, error: `Blog not found` });
    }
  });
};

module.exports = postComment;
