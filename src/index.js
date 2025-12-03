import mongoose from "mongoose";
import {DB_NAME} from './constants.js';
import dbConnect from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config(
    {
        path: './env'
    }
)

dbConnect()