const {Router}=require("express");
const authController = require('../controllers/authController')

const router=Router();  //new instance for router and it handle the different request from the routers

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);


module.exports=router;
