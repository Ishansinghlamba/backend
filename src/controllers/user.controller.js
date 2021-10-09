const express = require("express")
const  router  = express.Router();
const User = require("../models/user.model")

router.post("/users", async (req,res)=>{
    const user = await User.create(req.body);
    return res.send(user);
})

router.get("/users", async (req,res)=>{
    const user = await User.find({}).lean().exec();
    return res.send(user);
})

router.patch("/users/:id", async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(user);
})
router.delete("/users/:id", async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
})
module.exports = router;