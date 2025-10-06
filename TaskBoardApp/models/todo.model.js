const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:String,enum:["pending","completed"],default:"pending"},
    createdBy:{type:mongoose.Types.ObjectId,ref:"User"},
    assignedTo:{type:mongoose.Types.ObjectId,ref:"User",required:true},
    dueDate:{type:Date,required:true}
})

const TodoModel=mongoose.model("todos",todoSchema)
module.exports=TodoModel