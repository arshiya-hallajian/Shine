const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001
const auth.router = require('./routes/auth.router')

//middleware 
app.use(cors())


//auth router
app.use("/api/auth", auth.router)


app.listen(port, () => console.log(`listening on port ${port}!`))