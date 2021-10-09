const express = require("express");
const app = express();
app.use(express.json())
const connect = require("./configs/db")

const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const commentController = require("./controllers/comment.controller")
const tagController = require("./controllers/tag.controller")

app.use("/users",userController)
app.use("/posts",postController)
app.use("/tags",tagController)
app.use("/comments",commentController)


app.listen(6789, async ()=>{
    await connect();
    console.log("running on port 6789")
})