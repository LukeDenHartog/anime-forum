const User = require('../models/User'); // Update the path accordingly
const Comment = require('../models/Comment');
const sequelize = require('../config/connection');
// Assuming you have a Sequelize connection established

sequelize.sync({ force: true }).then(() => {
const userData = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },  {
    username: 'user3',
    password: 'password3',
  },
];

User.bulkCreate(userData)
  .then((users) => {
    console.log('Users created:', users);
  })
  .catch((error) => {
    console.error('Error creating users:', error);
  });

// Sample posts to be created
const comments = [
    {
      comment_text: "I prefer cartoons",
      user_id: "1",
    },
    {
      comment_text: "I love deathnote",
      user_id: "2",
    },
    {
      comment_text: "No way not deathnote!",
      user_id: "3",
    },


  ];
  
  // Bulk create the sample posts
  Comment.bulkCreate(comments)
    .then((createdComments) => {
      console.log(`${createdComments.length} The comments were created successfully.`);
    })
    .catch((error) => {
      console.error("Error could not bulkCreate comment:", error);
    });

  
  });