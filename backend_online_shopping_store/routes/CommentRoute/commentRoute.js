const express = require("express");
const CommentRouter = express.Router();
const CommentController = require('../../controllers/CommentController/CommentController');

CommentRouter.post("/create", CommentController.addComment);
CommentRouter.get("/display", CommentController.getAllComments);
CommentRouter.delete("/delete/:id", CommentController.deleteComment);

module.exports = CommentRouter;
