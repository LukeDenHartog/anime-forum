const router = require('express').Router();
const { Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try { 
  const commentData = await Comment.findAll({
    include: [{ model: User, attributes: ["username"] }],
  });
  // Convert comment data to plain JavaScript object
  const comments = commentData.map((comment) => comment.get({ plain: true }));
  // Render homepage template with posts and login status
  res.render("homepage", {
    comments,
    logged_in: req.session.logged_in,
  });
}
catch(error) {
  console.log(error)
  // If there is an error, return 500 status code and error message
res.status(500).json(error);
  }
})

// Use withAuth middleware to prevent access to route
router.get('/comment', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comment }],
    });

    const user = userData.get({ plain: true });

    res.render('comment', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signin', (req, res) => {
    res.render("signin")
})


router.get('/comment', (req, res) => {
  res.render("comment")
})

router.get('/signin', (req, res) => {
    res.render("signin")
})

router.get('/signin', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/comment');
      return;
    }
  
    res.render('signin');
  });

module.exports = router;