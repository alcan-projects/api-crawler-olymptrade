// import { Router } from 'express';
// const router = Router();

// import Actives from '../schemas/Active';

// router.get('/actives/all', async (req, res) => {
//     try{
//         const response = await Actives.find()
//         res.status(200).json(response)
//     } catch(error){
//         res.status(500).json({
//             message: "Erro ao buscar dados"
//         })
//     }
// })
// router.get('/actives/one/:id', async (req, res) => {
//     try{
//         const response = await Actives.findById(req.params.id)
//         res.status(200).json(response)
//     } catch(error){
//         res.status(500).json({
//             message: "Erro ao buscar dados"
//         })
//     }
// })

// export default router