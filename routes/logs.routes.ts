import { Router } from 'express';
const router = Router()
import { Logs } from '../../infra/repositories/logs'

router.get('/logs', async (req, res) => {
    const response = await new Logs().getAll()
    res.status(200).json(response)
})

export default router