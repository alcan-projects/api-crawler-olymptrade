import { Response, Request } from "express";
import LogSchema from '../schemas/Log'
import { Logs } from '../config/firebase';

export default new class Log {
    async getAll(req: Request, res: Response){
        const logs = await LogSchema.find().limit(10)
        res.status(200).json(logs.reverse())
    }
    async create(req: Request, res: Response){
        console.log(req.body)

        try {
            const { message, type } = req.body; 
            const logs = await Logs.add({
                message, type
            })

            res.status(200).json(logs)
        } catch (error) {
            res.status(500).json({
                error: true,
                message: error,
            })
        }
    }
}