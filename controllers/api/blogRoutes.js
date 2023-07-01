const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//* Create a new blog
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* Update blog by ID
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {
        ...req.body,
        user_id: req.session.user_id,
        updatedAt: Date.now(),
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!updatedBlog[0]) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Delete a blog by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Create a new comment
router.post('/:id/comments', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newComment = await Comment.create({
      content: req.body.content,
      blog_id: req.params.id,
      user_id: req.session.user_id,
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error('error', error);
    res.status(500).json({ message: 'Failed to create a new comment' });
  }
});

module.exports = router;
