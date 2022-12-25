const express=require('express');

const UserController=require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index');
const AuthRequestValidatorMiddleWare=require('../../middlewares/index');

const router=express.Router();

router.post(
    '/signup',
    AuthRequestValidator.validateUserAuth,
    UserController.create 
    );
router.post(
    '/signIn',
    AuthRequestValidator.validateUserAuth,
    UserController.signIn
    );
module.exports=router;
