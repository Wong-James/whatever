const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = mongoose.Schema({
    pet_name: {
        type: String,
        unique: [true, "NAME MUST BE UNIQUE"],
        required : [true, "PET NAME MUST BE AT LEAST 3 CHARACTERS LONG"]
    },
    pet_type: {
        type: String,
        required: [true, "PET TYPE MUST BE AT LEAST 3 CHARACTERS LONG"]
    },
    pet_description: {
        type: String,
        required: [true, "DESCRIPTION MUST BE AT LEAST 3 CHARACTERS LONG"]
    },
    skill_1:{
        type: String
    },
    skill_2: {
        type: String
    },
    skill_3: {
        type: String
    }
}, {timestamps: true})

PetSchema.plugin(uniqueValidator, {message: "PET NAME MUST BE UNIQUE"})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet