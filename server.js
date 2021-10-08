const express = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose")
const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/practice_mongo",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
}
const userSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname:String,
        age:Number,
    }
)
const User = mongoose.model("user",userSchema)
//new
const adminSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname:String,
        age:Number,
    }
)
const Admin = mongoose.model("admin",adminSchema)

app.post("/users", async (req,res)=>{
    const user = await User.create(req.body);
    return res.send(user);
})
// app.get("/users", async (req,res)=>{
//     const user = await User.find().lean().exec();
//     return res.send(user);
// })
app.get("/users", async (req,res)=>{
    const user = await User.find({}).lean().exec();
    return res.send(user);
})
app.post("/admins", async (req,res)=>{
    const admin = await Admin.create(req.body);
    return res.send(admin);
})
app.patch("/users/:id", async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.send(user);
})
app.listen(6789, async ()=>{
    await connect();
    console.log("running on port 6789")
})