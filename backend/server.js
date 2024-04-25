const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT


app.get('/health', (req,res)=>{
    res.send('Server is running')
})


app.listen(port, ()=>{
    console.log(`Server is runnig on port${port}`)
})

