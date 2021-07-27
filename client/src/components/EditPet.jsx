import React, {useState, useEffect} from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"

const EditPet = props => {
    const {id} = props
    const [validState, setValidState] = useState({})
    const [formState, setFormState] = useState({
        title: "",
        price: 0,
        description: ""
    })
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Pet/${id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
    }, [])
    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value
    })
    }   

    const submitHandler = event => {
        event.preventDefault()
        axios.put(`http://localhost:8000/api/Pet/${id}`, formState)
            .then(res => {
                navigate(`/api/pet/${id}`)
            })
            .catch(err => {
                console.log(err.response.data)
                console.log(err)
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key,value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return(
        <div> 
            <h1>Edit Pet</h1>
            <form onSubmit={submitHandler} >
                <p>
                    Pet Name:
                    <input type="text" name="pet_name" id="" value={formState.pet_name} onChange={changeHandler}></input>
                    {(validState.pet_name) ? <p>{validState.pet_name}</p>: null}
                </p>
                <p>
                    Pet Type:
                    <input type="text" name="pet_type" id="" value={formState.pet_type} onChange={changeHandler}></input>
                    {(validState.pet_type) ? <p>{validState.pet_type}</p>: null}
                </p>
                <p>
                    Description:
                    <input type="text" name="pet_description" id="" value={formState.pet_description} onChange={changeHandler}></input>
                    {(validState.pet_description) ? <p>{validState.pet_description}</p>: null}
                </p> 
                <p>
                    Pet Skill 1:
                    <input type="text" name="skill_1" id="" value={formState.skill_1} onChange={changeHandler}></input>
                </p> 
                <p>
                    Pet Skill 2:
                    <input type="text" name="skill_2" id="" value={formState.skill_2} onChange={changeHandler}></input>
                </p>
                <p>
                    Pet Skill 3:
                    <input type="text" name="skill_3" id="" value={formState.skill_3} onChange={changeHandler}></input>
                </p>
                <button type="submit">Update</button>   
            </form>
                <Link to="/api/pet/display">back to home</Link>
        </div>
    )
}
export default EditPet;