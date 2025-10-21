// the code is used to connect to the database
import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MongoDB_URI);

    }catch(err){
        console.log(err)

    }

};

export default connectDB;