const multer = require('multer');
const ProductItem = require("../../model/product/product");


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

let upload = multer({ storage: storage }).single("file");


exports.UploadImage = (req, res, next) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })
    
}


exports.addProduct = (req, res, next) => {

    const {body} = req;

    const {
        user,
        DressCode,
        description,
        Category,
        DressType,
        Subtype,
        DressPrice,
        Discount,
        images

    } = body;

    ProductItem.find({
        DressCode
    }).exec()
      .then(product => {

        if(product.length >= 1){
            return res.json({
                message : 'product already exist'
            });
        }else{

            const newproduct = new ProductItem();
            newproduct.UserId = user;
            newproduct.DressCode = DressCode;
            newproduct.Category = Category;
            newproduct.DressType = DressType;
            newproduct.DressPrice = DressPrice;
            newproduct.Discount = Discount;
            newproduct.images = images;
            newproduct.description = description;
            newproduct.Subtype = Subtype;

            newproduct
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        success: true,
                        message: 'Product successfully created'
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.json({
                        success: false,
                        
                    })
                });

        }
    });
}