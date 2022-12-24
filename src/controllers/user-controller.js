const {response}=require('express');
const UserService=require('../services/user-service');

const userService=new UserService();

const create=async(req,res)=>{
    try {
        const response=await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            success:true,
            message:"SUCCESSFULLY CREATED A NEW USER",
            err:{},
            data:response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"SOMETHING WENT WRONG",
            data:{},
            success:false,
            err:error
        })
    }
}

module.exports={
    create
}