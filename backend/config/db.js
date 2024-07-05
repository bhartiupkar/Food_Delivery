import mongoose from "mongoose";
export const connectDB=async()=>{
   await mongoose.connect('mongodb+srv://bhartiupkar1204:upkar1234@cluster0.aoeh2gw.mongodb.net/food-del').
   then(()=>console.log("Hey Upkar ! DB connected"))
}