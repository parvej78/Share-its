const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pic:{type:String,required:true,default:"user.png"},
    password:{type:String,required:true,minlength:6},
    locationsid:[{type:String,}],
})

module.exports=mongoose.model("User",userSchema);