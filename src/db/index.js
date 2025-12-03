import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';
import express from "express";

const dbConnect = async () =>{
    try{
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB is succesfully connected !! and the Host is ${ConnectionInstance.connection.host}`)
    }catch(error){
        console.error("Error: ", error)
        throw error
    }
}

export default dbConnect

/*
const app = express();

; ( async () =>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.error("ERROR :", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})

*/