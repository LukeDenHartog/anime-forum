const router = require('express').Router();


router.get('/', (req, res) => {
    res.render("homepage")
})

router.get('/signin', (req, res) => {
    res.render("signin")
})

module.exports = router;