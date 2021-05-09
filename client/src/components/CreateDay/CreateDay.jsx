import {useState} from 'react'
import {useParams} from "react-router-dom"
import {createADay} from "../../services/days"

export default function  () {
    const [form, setForm] = useState({})
    let {id} = useParams()
    
    function handleChange(event) {
        let {name, value} = event.target
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let data = await createADay(id, form)
    }
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input name="trip_day" type="number" placeholder="Add which day..." value={form.trip_day}/>
            <input name="name" type="text" placeholder="name" value={form.location}/>
            <input name="location" type="text" placeholder="location" value={form.location}/>
            <input name="description" type="text" placeholder="description" value={form.description}/>
            <button>Add Activity</button>
            <button type="submit">Create Day</button>
            <button>Add Another Day</button>
        </form>
    )
}
