const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const app = express()
const router = express.Router()
const authRoutes = require('../backend/routes/authRoutes')
const port = process.env.PORT


app.use(cors({
    origin : ['http://localhost:3000'],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())


app.use(authRoutes)


app.get('/health', (req,res)=>{
    res.send('Server is running')
})


app.listen(port, ()=>{
    console.log(`Server is runnig on port${port}`)
})

