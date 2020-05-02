const WishlistItems = require("../../model/wishlist/wishlist");

exports.addItem = (req, res, next) => {

    const {body} = req;

    const {
        Subtype,
        DressPrice,
        Images,
        UserId
    } = body;


    WishlistItems.find({
        _id
    }).exec()
      .then(listItem => {

        if(listItem.length >= 1){
            return res.json({
                message : 'Already in Wishlist..!'
            });
        }else{

            const newlistItem = new WishlistItems();
            newlistItem.Subtype = Subtype;
            newlistItem.DressPrice = DressPrice;
            newlistItem.Images = Images;
            newlistItem.UserId = UserId;


            newlistItem
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Added to Wishlist..'
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
}

exports.getAllItems = (req, res) => {
    WishlistItems.find((err, listItem) => {
        if(err){
            console.log(err);
        }
        else {
            res.json(listItem);
        }
    });
}

exports.deleteItem = (req,res) => {
    WishlistItems.remove({_id: req.params.id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Item deleted..!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
}
