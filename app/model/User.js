import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    roles: {
        type : [String],
        //User , Ta , Admin
        default : ["User"]
    },
    name : {
        type : String,
        required : true,
    },
    surname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    proj : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Proj'
    },
    checkArr : {
        type : Object
    },
    techStack : {
        type : [String]
    },
    toolStack : {
        type : [String]
    },
    projRefType : {
        type : String,
        required : true
    },
    decription : {
        type : String
    }

})

const out = mongoose.models.User ||  mongoose.model('User' , userSchema)
export default out