const router = require('express').Router();
//
const userResponseControllers = require('../controllers/userResponseControllers');

router.post('/response', userResponseControllers.addResponse);
router.get('/response', userResponseControllers.getResponse);
router.delete('/response', userResponseControllers.deleteResponse);

 


module.exports = router;
