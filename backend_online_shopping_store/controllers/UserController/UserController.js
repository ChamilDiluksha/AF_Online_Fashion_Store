const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../model/user/user');





exports.user_signup = (req,res,next) => {
    User.find({Username: req.body.Username})
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res.status(406).json({
                    message: 'Already exist'
                });
            }else{
                bcrypt.hash(req.body.Password,10,(err, hash) =>{
                    if(err){
                        return res.status(500).json({
                            error: err
                        })
                    }else{
                        const user = new User({
                            _id:mongoose.Types.ObjectId(),
                            Type: "User",
                            Fname:req.body.fname,
                            Username: req.body.Username,
                            Password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log('User Created',result);
                                res.status(201).json({
                                    message: 'User Created'
                                })
                            })
                            .catch( err =>{
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                });
            }
        });
}





exports.userSignin =(req,res,next) => {
    User.find({Username:req.body.Username}).exec().then(user => {
        if(user.length < 1){
            return res.status(401).send('unauthorized');
        }
        bcrypt.compare(req.body.Password, user[0].Password,(err,result) => {
            if(err){
                return res.status(401).send('unauthorized');
            }
            if(result){
                let token = null;
                if(user[0].Token === null) {
                    token = jwt.sign(
                        {
                            Username: user[0].Username,
                            UserId: user[0]._id
                        },
                        'secret',
                        {
                            expiresIn: "1h"
                        }
                    );
                }else{
                    token = user[0].Token;
                }
                user[0]._id = user[0]._id;
                user[0].Token = token;
                user[0].LastLogin = Date.now();
                user[0]
                    .save()
                    .then(result => {
                        console.log("User - "+user[0]._id+" Signed-in, Time - "+Date.now());
                    })
                    .catch( err =>{
                        console.log(err);
                    });
                return res.status(200).json({
                    message:'Authentication successful',
                    token:token,
                    username:user[0].UserId,
                    userId:user[0]._id,
                    type:user[0].Type
                });
            }else{
                return res.status(401).send('UNAUTHORIZED');
            }
        })
    });
}


exports.user_validate =(req,res,next) => {
    User.find({_id:req.body.user.userId,Token:req.body.token }).exec().then(user => {
        if(user.length < 1){
            return res.status(200).json({
                valid: false
            });
        }else {
            return res.status(200).json({
                valid: true
            });
        }
    });
}

exports.user_signout =(req,res,next) => {
    User.find({_id:req.body.user.userId,Token:req.body.token }).exec().then(user => {
        if(user.length < 1){
            return res.status(404).send('user not found');
        }else {
            user[0]._id = req.body.user.userId;
            user[0].Token = null;
            user[0]
                .save()
                .then(result => {
                    console.log("User - "+user[0]._id+" Signed-out, Time - "+Date.now());
                    res.status(200).json({
                        message: 'Sign Out',
                    });
                })
                .catch( err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                });
        }
    });
}