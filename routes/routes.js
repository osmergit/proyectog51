import express from 'express';
export const router = express.Router();

router.get('/',(req,res) => {
    res.send('🚀Bienvenidos a Node Js desde la Raiz🚀')
})

router.get('/login', (req,res) => {
    res.send("😎Bienvenidos a Node Js desde Login😎")
})

router.post('/agregar',(req,res) => {
    res.send("🙂Archivo agregado con exito😊")
})

router.delete('/delete', (req,res) => {
    res.send("😬Archivo eliminado con exito")
})

export default router;