const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:String,enum:["pending","completed"],default:"pending"},
    createdBy:{type:mongoose.Types.ObjectId,ref:"User"}
})

const TodoModel=mongoose.model("todos",todoSchema)
module.exports=TodoModel