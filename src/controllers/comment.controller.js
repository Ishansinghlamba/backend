const express = require("express");
const router = express.Router()
const Comment = require("../models/comment.model")

router.post("/comments", async (req,res)=>{
    try{
    const comment = await Comment.create(req.body);
    return res.send(comment);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
router.get("/comments", async (req,res)=>{
    const comment = await Comment.find({}).lean().exec();
    return res.send(comment);
})
router.get("/comments/:id", async (req,res)=>{
    const comment  = await Comment.findById(req.params.id);
    return res.send(comment);
})
router.patch("/comments/:id", async (req,res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(comment);
})
router.delete("/comments/:id", async (req,res)=>{
    const comment = await Comment.findByIdAndDelete(req.params.id);
    return res.json({deleted:comment})
})
module.exports = router;