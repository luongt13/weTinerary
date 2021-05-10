import {useState} from 'react'
import {useParams} from "react-router-dom"
import {createADay} from "../../services/days"
import "./CreateDay.css"

export default function CreateDay(props) {
    const [showForm, setShowForm] = useState(false)
    const [tripDay, setTripDay] = useState({})
    const [activityForm, setActivityForm] = useState({})
    let {id} = useParams()

    function handleDay(event) {
        let {name, value} = event.target
        setTripDay(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function handleChange(event) {
        let {name, value} = event.target
        setActivityForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

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
    function showActivityForm() {
        setShowForm(prevState => !prevState)
    }
    return (
    <div className="container">
            <h3>Add A Day</h3>
        <form onChange={handleDay}>
            <label htmlFor="trip_day">Day</label>
            <input name="trip_day" type="number" placeholder="Enter day" value={tripDay.trip_day}/>
        </form>
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <h3>Add An Activity</h3>
            <label htmlFor="name">What are you doing?</label>
            <input name="name" type="text" placeholder="Enter activity name" value={activityForm.name}/>
            <label htmlFor="location">Where is this activity?</label>
            <input name="location" type="text" placeholder="Enter location" value={activityForm.location}/>
            {showForm ? 
                <button onClick={showActivityForm}>Add Activity</button>
                : <button type="submit">Save</button>}
        </form>
    </div>
    )
}
