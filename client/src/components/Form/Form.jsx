import {useState} from 'react'
import {updateADay} from "../../services/days"
import {useParams} from "react-router-dom"
import "./Form.css"

export default function Form(props) {
    console.log(props.activity)
    let {name, location, day_id, id} = props.activity
    let params = useParams()
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
        await updateADay(trip_id, day_id, {activities_attributes: form})
        props.setToggle(prevState => !prevState)
        props.setShowForm(prevState => !prevState)
    }
    return (
        <div>
            {props.activity ? <form className="edit-form" onChange={handleChange} onSubmit={handleSubmit}> 
                <input className="name" name="name" type="text" value={form.name}/>
                <input name="location" type="text" value={form.location}/>
                <button type="submit">Save</button>
            </form> : 
            <div></div>
            
            }
        
        </div>
    )
}
