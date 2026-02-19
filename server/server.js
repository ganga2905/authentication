import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';


dotenv.config()

const app=express();

app.use(express.json());
app.use(cors());
// dotenv.config();

app.use('/api',employeeRoutes)
const PORT=process.env.PORT|| 7000;
const MONGOURL=process.env.MONGOURL

mongoose.connect(MONGOURL)
.then(()=>{
    console.log("mongoDb conncted");
    
app.listen(PORT,()=>{
    console.log(`server conncted${PORT}`);
    
})

})
.catch((err)=>{
    console.log(err.meassage);
    
})
