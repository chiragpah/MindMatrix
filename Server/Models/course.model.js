require("dotenv").config();
const express=require("express")
const mongoose = require("mongoose");
const reviewSchema=new mongoose.Schema({
    user:Object,
    rating:{
        type:Number,
        default:0
    },
    comment:String
});
const linkSchema=new mongoose.Schema({
    title:String,
    url:String
})
const commentSchema=new mongoose.Schema({
    user:Object,
    comment:String,
    commentReplies:[Object]
})
const courseDataSchema=new mongoose.Schema({
    videoUrl:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    title:{
        type:String,
    },
    videoSection:{
        type:String},
    description:{type:String},
    videoLength:{type:Number},
    videoPlayer:String,
    
    suggestion:String,
    comments:[commentSchema]
})
const courseSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    estimatedPrice:{
        type:Number
    },
    thumbnail:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    tags:{
        type:String,
        // required:true
    },
    level:{
        type:String,
        // required:true
    },
    demoUrl:{
        type:String,
        //required:true
    },
    benefits:[
        {title:String}
    ],
    prerequisited:[{title:String}],
    reviews:[reviewSchema],
    courseData:[courseDataSchema],
    ratings:{
        type:Number,
        default:0
    },
    purchased:{
        type:Number,
        default:0
    }

});
const CourseModel = mongoose.model("Course", courseSchema);
module.exports = CourseModel
