import {useState, useEffect} from 'react'
import {getAllDays, createADay} from "../../services/days"
import {getATrip} from "../../services/trips"
import {useParams} from "react-router-dom"
import CreateDay from '../CreateDay/CreateDay'
import DayDetails from "../DayDetails/DayDetails"
import Delete from "../Delete/Delete"
export default function TripDetails() {
    const [days, setDays] = useState()
    const [trip, setTrip] = useState()
    const [createForm, setCreateForm] = useState(false)
    const [toggle, setToggle] = useState(false)
    let {id} = useParams()
    useEffect(() => {
        fetch()
    }, [toggle])

    async function fetch() {
        let data = await getATrip(id)
        let res = await getAllDays(id)
        setTrip(data)
        console.log(data)
        setDays(res)
    }

    async function handleAddDay(){
        setCreateForm(prevState => !prevState)
    }


    return (
        <div>
            {trip ? 
            <div className="trip-description">
                <h1>{trip.name}</h1>
                <h3>{trip.location}</h3>
                <p>{trip.description}</p>
                <button>Edit Trip Details</button>
            </div>
            : <div></div>
            }
            <div className="day-item">
            {days && days.map((day) => {
                return (
                <div key={day.id}>
                    <h3>Day {day.trip_day}</h3> 
                    <DayDetails activities={day.activities} setToggle={setToggle}/>
                    {/* {day.activities && day.activities.map((activity) => {
                        return (
                            <div key={activity.id}>
                                <h3>{activity.name}</h3>
                                <p>{activity.location}</p>
                                <button>Delete Activity</button>
                            </div>
                        )
                    }) } */}
                    {/* <button onClick={() => setEditForm(prevState => !prevState)}>Edit</button> */}
                    <Delete setToggle={setToggle} day_id={day.id} trip_id={day.trip_id}/>
                </div>
                )
            })}
            </div>
            {/* {showForm ? <CreateDay/> : null} */}
            <button onClick={handleAddDay}>Add Day</button>
            {createForm ? <CreateDay/> : null}
        </div>
    )
}
