import express, { Request, Response } from 'express';
import cors from 'cors';

// routes
import Logs from './routes/logs.routes';

const app = express();
app.use(express.json())

app.use(cors())
app.get('/', (req:Request, res:Response) => {
    res.json({status: "Hello world"})
})
app.use("/", Logs)


export default app