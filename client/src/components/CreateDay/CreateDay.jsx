import {useState} from 'react'
import {FaSave} from "react-icons/fa"
import {useParams} from "react-router-dom"
import {createADay} from "../../services/days"
import "./CreateDay.css"

export default function CreateDay(props) {
    const [showForm, setShowForm] = useState(false)
    const [tripDay, setTripDay] = useState({})
    const [activityForm, setActivityForm] = useState({})
    let {id} = useParams()
    //set the day of the trip
    function handleDay(event) {
        let {name, value} = event.target
        setTripDay(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    //set the activity information
    function handleChange(event) {
        let {name, value} = event.target
        setActivityForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    //create the day
    async function handleSubmit(event) {
        event.preventDefault()
        let form = {
            trip_day: parseInt(tripDay.trip_day),
            activities_attributes: [activityForm]
        }
        await createADay(id, form)
        setShowForm(prevState => !prevState)
        props.setToggle(prevState => !prevState)
        props.setCreateForm(prevState => !prevState)
    }

    return (
    <div className="container">
        <form onChange={handleDay}>
            <h3>Add A Day</h3>
            <input name="trip_day" type="number" placeholder="Enter day" min="1" max="99" defaultValue={tripDay.trip_day}/>
        </form>
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <h4>Add An Activity</h4>
            <input name="start" type="time" defaultValue={activityForm.start}/>
            <input name="name" type="text" placeholder="Enter activity name" defaultValue={activityForm.name}/>
            <input name="location" type="text" placeholder="Enter location" defaultValue={activityForm.location}/>
            {showForm ? <button onClick={() => setShowForm(prevState => !prevState)}>Add Activity</button> : <button type="submit" title="Save"><FaSave/></button>}
        </form>
    </div>
    )
}