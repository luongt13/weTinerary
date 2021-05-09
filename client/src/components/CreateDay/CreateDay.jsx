import {useState} from 'react'
import {useParams} from "react-router-dom"
import {createADay} from "../../services/days"

export default function  () {
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
        let data = await createADay(id, form)
        console.log(data)
    }
    function showActivityForm() {
        setShowForm(prevState => !prevState)
    }
    return (
        <>
        <form onChange={handleDay}>
            <label htmlFor="trip_day">Day</label>
            <input name="trip_day" type="number" placeholder="Add which day..." value={tripDay.trip_day}/>
        </form>
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <h3>Add An Activity</h3>
            <label htmlFor="name">What are you doing?</label>
            <input name="name" type="text" placeholder="name" value={activityForm.name}/>
            <label htmlFor="location">Where is this activity?</label>
            <input name="location" type="text" placeholder="location" value={activityForm.location}/>
            {showForm ? 
                <button onClick={showActivityForm}>Add Activity</button>
                : <button type="submit">Save</button>
            }
        </form>
            {showForm ?
            <form>
                <input name="name" type="text" placeholder="name" value={activityForm.name}/>
                <input name="location" type="text" placeholder="location" value={activityForm.location}/>
            </form>: <div></div>}
        </>
    )
}
