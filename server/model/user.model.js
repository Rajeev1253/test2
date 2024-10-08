import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatar: {
    public_id: String,
    url: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    enum:["User","Admin"],
      default:"User"
  }

});
export const userModel = mongoose.model("users", userSchema);