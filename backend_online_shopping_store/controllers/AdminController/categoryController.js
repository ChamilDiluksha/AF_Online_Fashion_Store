const CategoryItem = require("../../model/AdminModels/Category");

exports.addCategory = (req, res, next) => {

    const {body} = req;

    const {
        CategoryID,
        CategoryType,
        SubType,
        description
    } = body;


    CategoryItem.find({
        CategoryID
    }).exec()
      .then(category => {

        if(category.length >= 1){
            return res.json({
                message : 'Category already exist'
            });
        }else{

            const newCategory = new CategoryItem();
            newCategory.CategoryID = CategoryID;
            newCategory.CategoryType = CategoryType;
            newCategory.SubType = SubType;
            newCategory.description = description;

            newCategory
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Category successfully created'
                    })
                })
                .catch(err => {
                    console.log(err);
                });

        }
    });
}

exports.getAllCategory = (req, res) => {
    CategoryItem.find((err, category) => {
        if(err){
            console.log(err);
        }
        else {
            res.json(category);
        }
    });
}

exports.getCategory = (req, res) => {
    let categoryid = req.params.id;
    CategoryItem.findById(categoryid)
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.editCategory = (req, res) => {
    const {body} = req;

    const {
        CategoryID,
        CategoryType,
        SubType,
        description
    } = body;

    CategoryItem.findById(req.params.id, (err, category) => {
        if (!category)
            res.status(404).send("category is not found");
        else {
            category.CategoryID = CategoryID;
            category.CategoryType = CategoryType;
            category.SubType = SubType;
            category.description = description;

            category.save().then(category => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
}


exports.deleteCategory = (req,res,next) => {
    CategoryItem.remove({_id: req.params.id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Category deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
}