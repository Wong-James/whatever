const Pet = require("../models/pets.models")


//Display
module.exports.findAllPets = (req, res) => {
    Pet.find(req.Pet)
        .then(allPets => res.json({allPets}))
        .catch(err => res.json({err}))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(onePet => res.json(onePet))
        .catch(err => res.json(err))
}


//Create
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err)) 
}

//Update
module.exports.updatePet = (req, res) => {
    const {id} = req.params
    Pet.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deletePet = (req, res) => {
    const {id} = req.params
    Pet.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}