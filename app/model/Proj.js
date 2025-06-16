import mongoose from "mongoose";

const ProjShcma = new mongoose.Schema({
    user : [{
        type : mongoose.Schema.Types.ObjectId , ref : 'User'
    }],
    name : {
        type : String,
        default : "Untitile"
    },
    dateStart : {
        type : Date,
        default : new Date
    },
    dateEnd : {
        type : Date,
        default : new Date(Date.parse(Date.now().getMonth() + 4))
    },
    description : {
        type : String
    },
    techStack : [{
        type : String
    }],
    toolStack : [{
        type : String
    }],
    ver : {
        type : Number,
        default : 1
    },
    githubLink : {
        type : String
    }
})

const out = mongoose.model.Proj || mongoose.model("Proj" , ProjShcma);
export default out;