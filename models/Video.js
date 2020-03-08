import mongoose from "mongoose"

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required:"File is required"
    },
    title:{
        type:String,
        required:required
    },
    description: String
    author:{
        type:String,
        required:required
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    views:{
        type:Number,
        default:0
    }
})

const model = mongoose.model("Video",VideoSchema);

export default model;