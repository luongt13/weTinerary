import {useState} from 'react'
import {updateADay} from "../../services/days"
import {useParams} from "react-router-dom"
export default function Form(props) {
    let {name, location, day_id, id} = props.activity
    let params = useParams()
    console.log(day_id)
    let trip_id = (parseInt(params.id))
    console.log(props.activity)
    const [form, setForm] = useState({
            id,
            name: name,
            location: location
        
    })

    function handleChange(event) {
        let {name, value} = event.target
        setForm(prevState => ({
            ...prevState,
            id,
            [name]: value
        }))
    }
    async function handleSubmit(event){
        event.preventDefault()
        let data = await updateADay(trip_id, day_id, {activities_attributes: form})
        console.log(data)
    }
    return (
        <div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input name="name" type="text" value={form.name}/>
                <input name="location" type="text" value={form.location}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
