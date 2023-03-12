const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001

//middleware 
app.use(cors())




app.listen(port, () => console.log(`listening on port ${port}!`))