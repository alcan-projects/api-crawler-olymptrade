import { Router } from 'express';
const router = Router()
import LogController from '../controllers/Log'

router.get('/logs', LogController.getAll)
router.post('/logs', LogController.create)

export default router