import {useState} from 'react'
import {useHistory} from "react-router-dom"
import {createATrip} from "../../services/trips"

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
    <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="name" value={form.name}/>
        <input name="location" type="text" placeholder="location" value={form.location}/>
        <input name="description" type="text" placeholder="description" value={form.description}/>
        <button type="submit">Create Trip</button>
    </form>
    )
}
