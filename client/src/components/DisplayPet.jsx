import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link, navigate } from "@reach/router"

const DisplayPet = props => {
    const {id} = props
    const [submitState, setSubmitState] = useState(false)
    const [pet, setpet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setpet(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pet/${id}`)
        .then(res => {
            setSubmitState(!submitState)
            navigate(`/api/pet/display`)
        })
        .catch(err=> console.log(err))
    }

    return(
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about: {pet.pet_name}</h2>
            <button onClick={() => deleteHandler(pet._id)}>Adopt {pet.pet_name}</button>
            <h3>Pet type: {pet.pet_type}</h3>
            <h3>Description: {pet.pet_description}</h3>
            <h3>Skills: {pet.skill_1},
            {pet.skill_2},
            {pet.skill_3}</h3>
            
            <Link to="/api/pet/display">Home</Link>
            
        </div>
    )
}

export default DisplayPet;