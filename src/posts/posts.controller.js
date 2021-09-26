const postService = require('./posts.service');

module.exports.createPosts = async function (req, res) {
  const blog = req.body;
  const createdBlog = await postService.createPost(blog);
  return res.json(createdBlog);
};

module.exports.getPosts = async function (req, res) {
  const posts = await postService.getPosts();
  return res.json(posts);
};

module.exports.getPostById = async function (req, res) {
  const postId = req.params.id;
  const post = await postService.getPostById(postId);
  return res.json(post);
};

module.exports.updatePostById = async function (req, res) {
  const postId = req.params.id;
  const update = req.body;
  const post = await postService.updatePostById(postId, update);
  return res.json(post);
};
module.exports.deletePostById = async function (req, res) {
  const postId = req.params.id;
  const post = await postService.deletePostById(postId);
  return res.json(post);
};

//homePage frontend 
module.exports.getHome = async function (req, res) {
  res.render('homePage');
};
