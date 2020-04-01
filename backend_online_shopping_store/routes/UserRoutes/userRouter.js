const express = require("express");
const userRouter = express.Router();
const UserController = require('../../controllers/UserController/UserController');

userRouter.post("/sign-up", UserController.user_signup);
userRouter.post('/sign-in', UserController.userSignin);
userRouter.post('/sign-out', UserController.user_signout);
userRouter.post('/validate', UserController.user_validate);
//userRouter.get('/details/:userId', UserController.user_details);
//userRouter.delete("/delete/:userId", UserController.user_delete);

module.exports = userRouter;