import mongoose from "mongoose";
import {DB_NAME} from './constants.js';
import dbConnect from "./db/index.js";
import dotenv from 'dotenv'
import app from "./app.js";

dotenv.config(
    {
        path: './env'
    }
)

dbConnect().then(()=>{
    try{
        app.listen(process.env.PORT || 3000, ()=>{
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        })
    }catch(err){
        console.log("Mongo DB connection error: ", err);
    }
})