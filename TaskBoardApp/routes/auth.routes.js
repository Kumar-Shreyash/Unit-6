const express=require("express")
const {signUp, logIn} = require("../controllers/auth.controller")
const AuthRouter=express.Router()

AuthRouter.post("/signup",signUp)

AuthRouter.post("/login",logIn)

module.exports=AuthRouter