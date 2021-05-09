import {useState, useEffect} from 'react'
import {getAllDays} from "../../services/days"
import {getATrip, updateATrip} from "../../services/trips"
import {useParams} from "react-router-dom"
import CreateDay from '../CreateDay/CreateDay'
import DayDetails from "../DayDetails/DayDetails"
import Delete from "../Delete/Delete"
import "./TripDetails.css"
export default function TripDetails() {
    const [days, setDays] = useState()
    const [trip, setTrip] = useState()
    const [createForm, setCreateForm] = useState(false)
    const [editTrip, setEditTrip] = useState(false)
    const [toggle, setToggle] = useState(false)

    let {id} = useParams()
    useEffect(() => {
        fetch()
    }, [toggle])

    async function fetch() {
        let data = await getATrip(id)
        let res = await getAllDays(id)
        setTrip(data)
        setDays(res)
    }

    function handleAddDay(){
        setCreateForm(prevState => !prevState)
    }

    function handleChange(event) {
        let {name, value} = event.target
        setTrip(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit (event) {
        event.preventDefault()
        await updateATrip(id, trip)
        setToggle(prevState => !prevState)
        setEditTrip(prevState => !prevState)
    }
    return (
        <div className="trip-layout">
        <div className="trip-overview">
            {trip ? 
            <div className="trip-description">
                {editTrip ? 
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <input name="name" type="text" value={trip.name}/>
                    <input name="location" type="text" value={trip.location}/>
                    <input name="description" type="text" value={trip.description}/>
                    <button className="button" type="submit">Save</button>
                </form> : <div>
                <h1>{trip.name}</h1>
                <h3>{trip.location}</h3>
                <p>{trip.description}</p>
                <button onClick={() => setEditTrip(prevState => !prevState)}>Edit Trip Details</button>
                </div>
            }
                
            </div>
            : <div></div>
            }
            <div className="day-list">
            {days && days.map((day) => {
                return (
                <div key={day.id} className="day-item">
                    <h3 className="day">Day {day.trip_day}</h3> 
                    <div className="day-details">
                        <DayDetails activities={day.activities} setToggle={setToggle}/>
                        </div>

                        <Delete setToggle={setToggle} day_id={day.id} trip_id={day.trip_id}/>
                </div>
                )
            })}
            </div>
            </div>
            <div className="add-button">
                {createForm ? <CreateDay setCreateForm={setCreateForm} setToggle={setToggle}/> : null}
                {createForm ? <button className="button add" onClick={handleAddDay}>Cancel</button> : <button className="button add" onClick={handleAddDay}>Add Day</button>}
                
            </div>
        </div>
    )
}
