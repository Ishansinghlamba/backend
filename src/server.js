const express = require("express");
const app = express();
app.use(express.json())
const connect = require("./configs/db")


const User = require("./models/user.model");

const Post = require("./models/post.model");

const Comment = require("./models/comment.model");

const Tag = require("./models/tag.model");

//USER SCHEMA AND MODEL


//POST SCHEMA AND MODEL


//COMMENT BODY SCHEMA


//TAG SCHEMA


// CRUD OPERATIONS USERS
app.post("/users", async (req,res)=>{
    const user = await User.create(req.body);
    return res.send(user);
})

app.get("/users", async (req,res)=>{
    const user = await User.find({}).lean().exec();
    return res.send(user);
})

app.patch("/users/:id", async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(user);
})
app.delete("/users/:id", async (req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
})

// CRUD OPERATIONS POSTS
app.post("/posts", async (req,res)=>{
    try{
    const post = await Post.create(req.body);
    return res.send(post);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
app.get("/posts", async (req,res)=>{
    const post = await Post.find({}).populate("userid").populate("tagids").lean().exec();
    return res.send(post);
})
app.get("/posts/:id", async (req,res)=>{
    const post = await Post.findById(req.params.id);
    return res.send(post);
})
app.patch("/posts/:id", async (req,res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(post);
})
app.delete("/posts/:id", async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.json({deleted:post})
})
// CRUD OPERATIONS COMMENTS
app.post("/comments", async (req,res)=>{
    try{
    const comment = await Comment.create(req.body);
    return res.send(comment);
    } catch(err){
        return res.status(400).send(err.message);
    }
})
app.get("/comments", async (req,res)=>{
    const comment = await Comment.find({}).lean().exec();
    return res.send(comment);
})
app.get("/comments/:id", async (req,res)=>{
    const comment  = await Comment.findById(req.params.id);
    return res.send(comment);
})
app.patch("/comments/:id", async (req,res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(comment);
})
app.delete("/comments/:id", async (req,res)=>{
    const comment = await Comment.findByIdAndDelete(req.params.id);
    return res.json({deleted:comment})
})
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