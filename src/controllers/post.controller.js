const express = require("express");
const router = express.Router()
const Post = require("../models/post.model")


router.post("/posts", async (req,res)=>{
    try{
    const post = await Post.create(req.body);
    return res.send(post);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
router.get("/posts", async (req,res)=>{
    const post = await Post.find({}).populate("userid").populate("tagids").lean().exec();
    return res.send(post);
})
router.get("/posts/:id", async (req,res)=>{
    const post = await Post.findById(req.params.id);
    return res.send(post);
})
router.patch("/posts/:id", async (req,res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(post);
})
router.delete("/posts/:id", async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.json({deleted:post})
})
module.exports = router;