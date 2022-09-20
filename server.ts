import MongoConnect from '../config/mongoose';
import { config } from 'dotenv';
import express from 'express';
import Config from './config';
MongoConnect()
// routes
import Log from './routes/logs.routes';

const app = express()
config()

app.use("", Log)


app.listen(Config.port, () => {
    console.log(`Start server in port ${Config.header}://${Config.host}:${Config.port}`)
})