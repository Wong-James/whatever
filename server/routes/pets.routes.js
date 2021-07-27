const PetController = require("../controllers/pets.controller")

module.exports = app => {
    app.post("/api/pet/create", PetController.createPet)
    app.get("/api/pet/display", PetController.findAllPets)
    app.get("/api/pet/:id", PetController.findOnePet)
    app.put("/api/pet/:id", PetController.updatePet)
    app.delete("/api/pet/:id", PetController.deletePet)
}