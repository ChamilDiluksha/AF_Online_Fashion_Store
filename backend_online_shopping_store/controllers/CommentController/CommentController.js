const Comments = require("../../model/Comment/comment");

// Method for add new comment
exports.addComment = (req, res) => {
    const Comment = req.body.Comment;
    const Review = Number(req.body.Review);
    const date = Date.parse(req.body.date);
    const ProductId = req.body.ProductId;
    const UserId = req.body.UserId;

    // WishlistItems.find({
    //     _id
    // }).exec()
    //   .then(listItem => {
    //
    //     if(listItem.length >= 1){
    //         return res.json({
    //             message : 'Already in Wishlist..!'
    //         });
    //     }else{

            const newComment = new Comments({
              Comment,
              Review,
              date,
              ProductId,
              UserId
            });
            // newlistItem.Subtype = Subtype;
            // newlistItem.DressPrice = DressPrice;
            // newlistItem.Images = Images;
            // newlistItem.UserId = UserId;

            newComment
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Comment Added..'
                    })
                })
                .catch(err => {
                    console.log(err);
                });
    //     }
    // });
// }
}

// Method for get all comments
exports.getAllComments = (req, res) => {
    Comments.find((err, comment) => {
        if(err){
            console.log(err);
        }
        else {
            res.json(comment);
        }
    });
}

// Method for delete comment
exports.deleteComment = (req,res) => {
    Comments.remove({_id: req.params.id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Comment deleted..!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
}
