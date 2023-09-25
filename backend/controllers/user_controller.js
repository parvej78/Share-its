//const e = require("express");
const MyError = require("../model/error");
const User = require("../model/user");

const ALL_USERS =[
    {
        id:"u1",
        name:"Xyz",
        email:"xyz@picpot.com",
        password:"xyz123"
    },
    {
        id:"u2",
        name:"Mno",
        email:"mno@picpot.com",
        password:"mno123"
    },
];


exports. getUsers = async(req,res,next)=>{
    let all_users;
    try{
        all_users= await User.find({}, "-password");
    }catch(err){
        return next(new MyError("Database error:Cannot get users",5000));
    }
    res.status(200).json({result:"success",message:ALL_USERS });
};

exports.register = async(req,res,next)=>{
    const {name, email, password}=req.body;
    let findUser;
    try{
        findUser = await User.findOne({email:email})
    }catch(err){
        return next(new MyError("Database Error:Cannot register",500))
    }
    if (findUser){
        return next(new MyError("Email already exist",422));
    }
    const newuser = new User({
        name,
        email,
        pic:'https://picsum.photos/200',
        password,
        locationsid:[]
    });
    try{
        await newuser.save();
    }catch(err){
        return next(new MyError("Database Error:cannot register",5000));
    }
    res.status(201).json({result:"success",message:newuser });
};

exports.login = async(req,res,next)=>{
    const {email,password}=req.body;
    let findUser;
    try{
        findUser = await User.findOne({email:email})
    }catch(err){
        return next(new MyError("Database Error:Something base happned",500))
    }
    if (findUser){
        return next(new MyError("Email already exist",422));
    }
    //const findUser = ALL_USERS.find((user)=>{
    //   return user.email===email;
    // });
    
    if(!findUser || findUser.password !==password){
        return next(new MyError("Email or passoward does not match",401));
    }
    res
    .status(200)
    .json({result:"success",message:"logged in successfully" });
};