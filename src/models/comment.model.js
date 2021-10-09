const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
      commentbody:{type:String, required :true},
      postid:{
          type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    }
    },{
        versionKey:false,
        timestamps:true
    }
)
const Comment = mongoose.model("comment",commentSchema)
module.exports = Comment;