const router = require('express').Router();
const userResponsesRoutes = require('./userResponsesRoutes');
 
 router.use('/user', userResponsesRoutes);
 
module.exports = router;
