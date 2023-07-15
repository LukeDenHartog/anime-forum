const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

//This middleware allows access to the home-routes.js file and its content
router.use('/', homeRoutes);
//This middlware allows us access to the index.js files inside the api folder alongwith
router.use('/api', apiRoutes);

module.exports = router;