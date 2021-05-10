import {useState} from 'react'
import {FaSave} from "react-icons/fa"
import {useHistory} from "react-router-dom"
import {createATrip} from "../../services/trips"
import "./CreateTrip.css"

export default function CreateTrip() {
    const [form, setForm] = useState({})

    let history = useHistory()

    function handleChange(event) {
        let {name, value} = event.target
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let data = await createATrip(form)
        history.push(`/trips/${data.id}`)
    }

    return (
    <form className="container" onChange={handleChange} onSubmit={handleSubmit}>
        <h3>Create A Trip</h3>
        <input name="name" type="text" placeholder="Enter trip name" defaultValue={form.name}/>
        <input name="location" type="text" placeholder="Enter location" defaultValue={form.location}/>
        <input name="description" type="text" placeholder="Enter description" defaultValue={form.description}/>
        <button type="submit" title="Save"><FaSave/></button>
    </form>
    )
}