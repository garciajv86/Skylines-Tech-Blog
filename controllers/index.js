const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./api/userRoutes');
// const blogRoutes = require('./api/blogRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/api/users', userRoutes);
// router.use('/api', blogRoutes);
router.use('/api/signup', userRoutes);

module.exports = router;
