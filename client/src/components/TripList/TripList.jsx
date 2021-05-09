import {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import {getAllTrips} from "../../services/trips"
import {getUserTrips} from "../../services/trips"
import CreateTrip from '../CreateTrip/CreateTrip'
import "./TripList.css"

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [createTrip, setCreateTrip] = useState(false)
    let {url} = useParams()

    useEffect(() => {
        fetch()
    }, [])

    async function fetch() {
        if (url === "my-trips") {
            let data = await getUserTrips()
            setTrips(data)
        } else {
            let data = await getAllTrips()
            setTrips(data)
        }
    }

    return (
        <>
        <div className="trip-list">
            {trips.map((trip)=> {
                return (
                    <div key={trip.id} className="trip-item">
                        <Link to={`/trips/${trip.id}`}>
                            <h3>{trip.name}</h3>
                            <h5>{trip.location}</h5>
                            <p>{trip.description}</p>
                            </Link>
                    </div>
                )
            })}
        </div>
        <div className="add-button">
        {createTrip ? null : <CreateTrip/>}
        {createTrip ?  <button className="button add" onClick={()=> setCreateTrip(prevState => !prevState)}>Add Trip</button>: <button className="add-button add" onClick={()=> setCreateTrip(prevState => !prevState)}>Cancel</button>}
        </div>
        </>
    )
}
