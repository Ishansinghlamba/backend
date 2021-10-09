const express = require("express")
const  router  = express.Router();
const User = require("../models/user.model")

router.post("/", async (req,res)=>{
    const user = await User.create(req.body);
    return res.send(user);
})

router.get("/", async (req,res)=>{
    const user = await User.find({}).lean().exec();
    return res.send(user);
})
router.get("/:id", async (req,res)=>{
    const user = await User.findById(req.params.id);
    return res.send(user);
})
router.patch("/:id", async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(user);
})
router.delete("/:id", async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
})
module.exports = router;