const express = require("express");
const router = express.Router()
const Tag = require("../models/tag.model")


router.post("/", async (req,res)=>{
    try{
    const tag = await Tag.create(req.body);
    return res.send(tag);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
router.get("/", async (req,res)=>{
    const tag = await Tag.find({}).lean().exec();
    return res.send(tag);
})
router.get("/:id", async (req,res)=>{
    const tag  = await Tag.findById(req.params.id);
    return res.send(tag);
})
router.patch("/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(tag);
})
router.delete("/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndDelete(req.params.id);
    return res.json({deleted:tag})
})
module.exports = router;