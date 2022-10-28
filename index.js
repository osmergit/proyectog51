import express from "express";
import cors from 'cors'

//import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
//app.use('/usuarios',blogRoutes)


app.get('/',(req,res)=>{
    res.send('🚀🚀HOLA MUNDO 🚀🚀🚁😎')
}) 

app.listen(8000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:8000/')
})