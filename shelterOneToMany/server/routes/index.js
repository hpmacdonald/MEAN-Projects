const petRoutes = require('./pet.routes');
const toyRoutes = require('./toy.routes');
const router = require('express').Router();
const apiRouter = require('express').Router();
const catchallrouter = require('./catchall.routes');


router.use('/pets',petRoutes)
router.use('/toys', toyRoutes)
module.exports = apiRouter.use('/api', router).use(catchallrouter);


