const UserModel = require("../models/user.model")
let salt=10
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const signUp=async(req,res)=>{
    try {
        const {email,password,name,role}=req.body
        console.log(email,password,name,role)
        const user=await UserModel.findOne({email})
        console.log(user)
        if(!user){
            
            bcrypt.hash(password,salt,async function(err,hash){
                console.log(1)
                if(err){
                    return res.status(500).json({message:"Something went wrong, try again later"})
                }else{
                    console.log(3) 
                    await UserModel.create({email,name,password:hash,role})
                    return res.status(201).json({message:"Account created"})
                }
                
            })
        }else{
            res.status(200).json({message:"User exists, please login"})
        }
    } catch (error) {
        res.status(500).json({message:"Something went wrong, try again later"})
    }
}

const logIn=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await UserModel.findOne({email})
        // console.log(user)
        if(!user){
            return res.status(404).json({message:"No user Found, Please signupp"})
        }
        const hash=user.password
        bcrypt.compare(password,hash,function(err,result){
            if(err){
                return res.status(500).json({message:"Something Went Wrong, try later"})
            }
            if(result===true){
                let accessToken=jwt.sign({name:user.name,email:user.email,role:user.role,user_id:user._id},'shhhhh',{expiresIn:60*15})
                let refreshToken=jwt.sign({name:user.name,email:user.email,role:user.role,user_id:user._id},'shhhhh',{expiresIn:60*60})
                res.status(200).json({message:"Login success",accessToken,refreshToken})
            }else{
                res.status(401).json({message:"Wrong Email or Password"})
            }
        })
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong, try again later"})
    }
}

module.exports={signUp, logIn}