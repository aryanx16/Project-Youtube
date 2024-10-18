const express = require("express")
const cloudinary = require("cloudinary").v2
const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const Client = require("../models/User")
require("dotenv").config()
const ClientRouter = express();
cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME , 
    api_key:process.env.API_KEY , 
    api_secret: process.env.API_SECRET,
});
ClientRouter.get("/",(req,res)=>{

    // res.send("Client ROUTER IS WORKING PERFECTLY...")
    console.log("Client ROUTER IS WORKING PERFECTLY...")
})

ClientRouter.post("/register",async(req,res)=>{
    try{
        const UploadedImage = await cloudinary.uploader.upload(req.files.logo.tempFilePath)
        const HashedPassword = await bcryptjs.hash(req.body.Password,10)
        const NewClient = new Client({
            _id: new mongoose.Types.ObjectId,
            ChannelName:req.body.ChannelName,
            Phone:req.body.Phone,
            Email:req.body.Email,
            Password:HashedPassword,
            LogoId:UploadedImage.public_id,
            LogoUrl:UploadedImage.secure_url,
        })
        const createdClient = await NewClient.save()
        // console.log(UploadedImage)
        console.log(createdClient)
        res.send("/register IS WORKING PERFECTLY...")
        console.log("/register IS WORKING PERFECTLY...")
    }
    catch(e){
        return res.status(500).json("Error in register..."+e)
    }
    
})
ClientRouter.post("/login",async(req,res)=>{
    res.send("/login IS WORKING PERFECTLY...")
    console.log("/login IS WORKING PERFECTLY...")
    
})
ClientRouter.put("/profile",async(req,res)=>{
    res.send("/profile IS WORKING PERFECTLY...")
    console.log("/profile IS WORKING PERFECTLY...")
    
})
ClientRouter.post("/subscribe",async(req,res)=>{
    res.send("/subscribe IS WORKING PERFECTLY...")
    console.log("/subscribe IS WORKING PERFECTLY...")
    
})

module.exports=ClientRouter