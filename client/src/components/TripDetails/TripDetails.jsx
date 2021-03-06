import {useState, useEffect} from 'react'
import {FaSave} from "react-icons/fa"
import { MdEdit} from "react-icons/md"
import {getAllDays} from "../../services/days"
import {getATrip, updateATrip} from "../../services/trips"
import {useParams} from "react-router-dom"
import CreateDay from '../CreateDay/CreateDay'
import DayDetails from "../DayDetails/DayDetails"
import Delete from "../Delete/DeleteDay"
import AddButtons from "../AddButtons/AddButtons"
import TripInformation from "../TripInformation/TripInformation.jsx"
import "./TripDetails.css"

export default function TripDetails(props) {
    const [days, setDays] = useState(null)
    const [trip, setTrip] = useState(null)
    const [createForm, setCreateForm] = useState(false)
    const [editTrip, setEditTrip] = useState(false)
    const [toggle, setToggle] = useState(false)

    let {id} = useParams()
    
    useEffect(() => {
        fetchTrips()
        fetchDays()
        return () => {}
        // eslint-disable-next-line
    }, [toggle])

    async function fetchTrips() {
        let data = await getATrip(id)
        setTrip(data)
    }

    async function fetchDays() {
        let res = await getAllDays(id)
        setDays(res)
    }

    function handleChange(event) {
        let {name, value} = event.target
        setTrip(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    //handle updating trip details
    async function handleSubmit(event) {
        event.preventDefault()
        await updateATrip(id, trip)
        setToggle(prevState => !prevState)
        setEditTrip(prevState => !prevState)
    }

    function displayDetails() {
        if (trip) {
              //if there is a trip and edit trip, show edit form
            if (editTrip && trip) {
                return (
                <div className="trip-description">
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                    <input name="name" type="text" defaultValue={trip.name}/>
                    <input name="location" type="text" defaultValue={trip.location}/>
                    <input name="description" type="text" defaultValue={trip.description}/>
                    <button className="button" type="submit" title="Save"><FaSave/></button>
                    </form> 
                </div>
                )
            } else {
                return (
                    <div className="trip-description">
                        <TripInformation trip={trip}/>
                        {props.currentUser && trip.user_id === props.currentUser.id ? 
                        <button onClick={() => setEditTrip(prevState => !prevState)} title="Edit Trip Information"><MdEdit/></button>
                        : <div></div>}
                    </div>
                    )
            }
        } else {
            <div></div>
        } 
    }
    return (
    <div className="trip-layout">
        <div className="trip-overview">
        {displayDetails()}
            <div className="day-list">
            {days && trip && days.map((day) => {
                return (
                <div key={day.id} className="day-item">
                    <h3 className="day">Day {day.trip_day}</h3> 
                    <div className="day-details">
                        <DayDetails activities={day.activities} setToggle={setToggle} currentUser={props.currentUser} trip={trip.user_id}/>
                    </div>
                    {props.currentUser && trip.user_id === props.currentUser.id ? <Delete setToggle={setToggle} day_id={day.id} trip_id={day.trip_id}/> : null}     
                </div>
                )
            })}
            </div>
        </div>
        <div>
            <div className="add-form">
                {createForm ? <CreateDay setCreateForm={setCreateForm} setToggle={setToggle}/> : null}
            </div>
            <div className="add-button">
                {trip && props.currentUser && props.currentUser.id === trip.user_id ? <AddButtons setCreateForm={setCreateForm} createForm={createForm}/> : null} 
            </div>
        </div>
    </div>
    )
}
