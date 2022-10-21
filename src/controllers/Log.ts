import { Response, Request } from "express";
import { Logs } from '../config/firebase';

export default new class Log {
    async getAll(req: Request, res: Response){
        try {
            const logs = await Logs.get(); 
	        const list = logs.docs.map(doc => ({id: doc.id, ...doc.data()}))

            res.status(200).json(list)
        } catch (error) {
            res.status(500).json({
                error: true,
                message: error,
            })
        }
    }
    async create(req: Request, res: Response){
        try {
            const { message, type } = req.body; 
            const logs = await Logs.add({
                message, 
                type,
                createdAt: Date.now(),
                updatedAt: Date.now()
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