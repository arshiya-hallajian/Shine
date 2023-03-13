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
mongoose.connect('mongodb+srv://cluster0.lf726fk.mongodb.net/Shine?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority').then(()=>{
    console.log("connected to db")
})

//auth router                 
app.use("/api/auth", auth_router);


app.listen(port, () => console.log(`listening on port ${port}!`))