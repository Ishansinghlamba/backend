const express = require("express");
const router = express.Router()
const Tag = require("../models/tag.model")


router.post("/tags", async (req,res)=>{
    try{
    const tag = await Tag.create(req.body);
    return res.send(tag);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
router.get("/tags", async (req,res)=>{
    const tag = await Tag.find({}).lean().exec();
    return res.send(tag);
})
router.get("/tags/:id", async (req,res)=>{
    const tag  = await Tag.findById(req.params.id);
    return res.send(tag);
})
router.patch("/tags/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(tag);
})
router.delete("/tags/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndDelete(req.params.id);
    return res.json({deleted:tag})
})
module.exports = router;