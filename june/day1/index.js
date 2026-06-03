const express=require("express");
const dotenv=require("dotenv");
const userRouter=require("./routes/userRouter");
const connectDB=require("./config/db");

dotenv.config();

const myServer=express();
myServer.use(express.json());
connectDB();

myServer.use("/user",userRouter);

myServer.use("/run",(req,res)=>{
    res.send("welcome");
})

const port=process.env.PORT;
myServer.listen(port,()=>{
    console.log("my server is running",port);
})