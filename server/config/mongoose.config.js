const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pet_shelter_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("established a connection with database"))
    .catch(err => console.log("Something went wrong when connecting tot he database"))