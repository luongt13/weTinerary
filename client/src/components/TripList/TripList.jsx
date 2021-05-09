import {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import {getAllTrips} from "../../services/trips"
import {getUserTrips} from "../../services/trips"

export default function TripList() {
    const [trips, setTrips] = useState([])
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
        <div>
            All Trips
            {trips.map((trip)=> {
                return (
                    <div key={trip.id}>
                        <Link to={`/trips/${trip.id}`}>
                            <h3>{trip.name}</h3>
                        </Link>
                            <p>{trip.location}</p>
                            <p>{trip.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
