const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const blog of blogData) {
      const randomUser = users[Math.floor(Math.random() * users.length)];

      const createdBlog = await Blog.create({
        ...blog,
        user_id: randomUser.id,
      });

      const commentsForBlog = commentData.filter(
        (comment) => comment.blog_id === blog.id
      );

      for (const comment of commentsForBlog) {
        await Comment.create({
          ...comment,
          user_id: randomUser.id,
          blog_id: createdBlog.id,
        });
      }
    }

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Database seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();
