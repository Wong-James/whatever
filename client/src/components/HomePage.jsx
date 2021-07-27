import React, {useState, useEffect} from 'react'
import {Link} from "@reach/router"
import axios from "axios"

const HomePage = props => {

    const{submitState} = props
    const [petState, setPetState] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/display")
            .then(res => setPetState(res.data.allPets))
            .catch(err => console.log(err))
    }, [submitState])


    return(
        <div >
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home</h2>
            <table class="sortable">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                    {
                        petState.map((pet, i) =>{
                            return(
                                <tr key={i}>
                                    <td>{pet.pet_name}</td>
                                    <td>{pet.pet_type}</td>
                                    <td><Link to={`/api/pet/${pet._id}`}>Details </Link>
                                    | 
                                    <Link to={`/api/pet/${pet._id}/edit`}> Edit</Link></td>
                                </tr>
                            )
                        })
                    }
            </table>
                
            <Link to={`/api/pet/create`}>add a pet to the shelter</Link>
        </div>
    )
}
export default HomePage;