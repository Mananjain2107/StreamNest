import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Connected to Database");
    }
    catch(error){
        console.log("MongoDB connection error",error);
        process.exit(1);
    }
}
export default connectDB;
