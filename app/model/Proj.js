import mongoose from "mongoose";

const ProjShcma = new mongoose.Schema({
    Ta : {
        type : Schema.Types.ObjectId , ref : 'User'
    }
})