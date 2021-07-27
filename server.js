const express = require("express");
const cors = require("cors");
const app = express()
const port = 8000;


require("./server/config/mongoose.config")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// add ROUTES HERE
const petRoutes = require("./server/routes/pets.routes")
petRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );

//code 8537c660
