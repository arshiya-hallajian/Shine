const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001
const auth_router = require('./routes/auth.router')
const mongoose = require('mongoose')

//middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//database connect 
mongoose.connect('mongodb+srv://shine:102030102030@cluster0.08shdy7.mongodb.net/Shine').then(()=>{
    console.log("connected to db")
})

//auth router                 
app.use("/api/auth", auth_router);


app.listen(port, () => console.log(`listening on port ${port}!`))