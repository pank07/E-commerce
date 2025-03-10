//pakages//
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//utils//
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js'; 

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/api/users', userRouter);
app.get('/',(req, res)=>{A
res.send("E-commerce project")
})
app.listen(port, ()=>console.log(`Server is running on port: ${port}`));    