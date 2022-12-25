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

const signIn=async(req,res)=>{
    try {
        const response=await userService.signIn(req.body.email,req.body.password);
        return res.status(201).json({
            success:true,
            message:"successfully signed in",
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

const isAuthenticated=async(req,res)=>{
    try {
       const token=req.headers['x-access-token'];
       const response=await userService.isAuthenticated(token);
       return res.status(200).json({
            message:"user is authenticated and token is valid",
            data:response,
            success:true,
            err:{}
       });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"SOMETHING WENT WRONG",
            data:{},
            success:false,
            err:error
        });
    }
}

module.exports={
    create,
    signIn,
    isAuthenticated
}