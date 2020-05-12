const express = require("express");
const CommentRouter = express.Router();
const CommentController = require('../../controllers/CommentController/CommentController');

CommentRouter.post("/create", CommentController.addComment);
CommentRouter.get("/display", CommentController.getAllComments);
CommentRouter.post("/update/:id", CommentController.updateComment);
CommentRouter.delete("/delete/:id", CommentController.deleteComment);

module.exports = CommentRouter;
