import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/olymptrade');

// routes
import Logs from './routes/logs.routes';
import Actives from './routes/actives.routes';

const app = express();
app.use(express.json())

app.use(cors())
app.get('/', (req:Request, res:Response) => {
    res.json({status: "Hello world"})
})
app.use("/", Logs)
app.use("/", Actives)


export default app