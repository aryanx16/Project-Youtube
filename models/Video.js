const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
        _id:{
            type:mongoose.Schema.Types.ObjectId
        },
        UserId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        VideoUrl:{
            type:String,
            required:true,
        },
        ThumbailUrl:{
            type:String,
            required:true,
        },
        Category:{
            type:String,
            requried:true,
        },
        Tags:{
            type:String,
            requried:true,
        },
        Likes:{
            type:Number,
            default:0,
        },
        Dislikes:{
            type:Number,
            default:0,
        },
        Views:{
            type:Number,
            default:0,
        },
        LikedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        DislikedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        ViewedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        Timestamp:{
            type:String,
            required:true,
        }
        
})

module.exports = mongoose.model("Video",VideoSchema)