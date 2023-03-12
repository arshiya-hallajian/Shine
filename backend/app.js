const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001
const auth_router = require('./routes/auth.router')

//middleware 
app.use(cors())


//auth router
app.use("/api/auth", auth_router)


app.listen(port, () => console.log(`listening on port ${port}!`))