import {useState, useEffect} from 'react'
import {getAllDays} from "../../services/days"
import {getATrip} from "../../services/trips"
import {useParams} from "react-router-dom"
import CreateDay from '../CreateDay/CreateDay'
export default function TripDetails() {
    const [days, setDays] = useState()
    const [trip, setTrip] = useState()
    const [createForm, setCreateForm] = useState(false)
    let {id} = useParams()
    useEffect(() => {
        fetch()
    }, [])

    async function fetch() {
        let data = await getATrip(id)
        let res = await getAllDays(id)
        setTrip(data)
        console.log(data)
        setDays(res)
    }

    function showCreateForm(){
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
            {/* <div className="trip-description">
                {days && days.forEach((day) => day.activities.length) ? 
                    <div>
                    <h1>{days[0].trip.name}</h1>
                    <h3>{days[0].trip.location}</h3>
                    <p>{days[0].trip.description}</p>
                    </div>
                    : 
                    <div></div>
            }
        </div> */}
            <div className="day-item">
            {days && days.map((day, index) => {
                return (
                <div key={day.id}>
                    <h3>Day {index}</h3> 
                    {day.activities && day.activities.map((activity) => {
                        return (
                            <div key={activity.id}>
                                <h3>{activity.name}</h3>
                                <p>{activity.location}</p>
                            </div>
                        )
                    }) }
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                )
            })}
            </div>
            <button onClick={showCreateForm}>Add Day</button>
            {createForm ? <CreateDay/> : null}
        </div>
    )
}
