const express = require("express");
const app = express();
app.use(express.json())
const connect = require("./configs/db")


const User = require("./models/user.model");

const Post = require("./models/post.model");

const Comment = require("./models/comment.model");

const Tag = require("./models/tag.model");

const userController = require("./controllers/user.controller")

const postController = require("./controllers/post.controller")

const commentController = require("./controllers/comment.controller")

const tagController = require("./controllers/tag.controller")




// CRUD OPERATIONS USERS


// CRUD OPERATIONS POSTS

// CRUD OPERATIONS COMMENTS

// CRUD OPERATIONS TAGS
app.post("/tags", async (req,res)=>{
    try{
    const tag = await Tag.create(req.body);
    return res.send(tag);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
app.get("/tags", async (req,res)=>{
    const tag = await Tag.find({}).lean().exec();
    return res.send(tag);
})
app.get("/tags/:id", async (req,res)=>{
    const tag  = await Tag.findById(req.params.id);
    return res.send(tag);
})
app.patch("/tags/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(tag);
})
app.delete("/tags/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndDelete(req.params.id);
    return res.json({deleted:tag})
})
app.listen(6789, async ()=>{
    await connect();
    console.log("running on port 6789")
})