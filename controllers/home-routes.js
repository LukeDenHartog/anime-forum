const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("homepage")
})


router.get('/signin', (req, res) => {
    res.render("signin")
})

router.get('/signin', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('signin');
  });

module.exports = router;