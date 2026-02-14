import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import route from './routes/employeeRoutes';


const app=express();

app.use(express.json());
app.use(cors());
dotenv.config();
const PORT=process.env.PORT|| 7000;
const MONGOURL=process.env.MONGOURL

mongoose.connect(MONGOURL)
.then(()=>{
    console.log("mongoDb conncted");
})
.catch((err)=>{
    console.log(err.meassage);
    
})

app.listen(PORT,()=>{
    console.log(`server conncted${PORT}`);
    
})
