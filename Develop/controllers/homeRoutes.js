const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

//* Render the homepage
router.get('/', async (req, res) => {
  try {
    //* Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    //* Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    //* Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!blogData) {
      //* If the blog doesn't exist, return a 404 error
      return res.status(404).json({ message: 'Blog not found.' });
    }

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Render the user profile page
//* Use withAuth middleware to prevent access to route
router.get('/user', withAuth, async (req, res) => {
  try {
    //* Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('user', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Render the login page
router.get('/login', (req, res) => {
  //* If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/user');
    return;
  }

  res.render('login');
});

module.exports = router;
