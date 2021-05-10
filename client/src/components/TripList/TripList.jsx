import {useState, useEffect} from 'react'
import {FaPlus} from "react-icons/fa"
import {MdCancel, MdRemoveCircleOutline} from "react-icons/md"
import {Link, useParams} from "react-router-dom"
import {deleteATrip, getAllTrips} from "../../services/trips"
import {getUserTrips} from "../../services/trips"
import CreateTrip from '../CreateTrip/CreateTrip'
import "./TripList.css"

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [createTrip, setCreateTrip] = useState(false)
    const [toggle, setToggle] = useState(false)

    let {id} = useParams()
    useEffect(() => {
        fetch()
    }, [toggle])

    async function fetch() {
        if (id) {
            let data = await getUserTrips()
            setTrips(data)
        } else {
            let data = await getAllTrips()
            setTrips(data)
        }
    }

    async function handleDelete(event) {
        event.preventDefault()
        await deleteATrip(event.target.value)
        setToggle(prevState => !prevState)
    }
    return (
        <>
        <div className="trip-list">
            {trips.map((trip)=> {
                return (
                    <div key={trip.id} className="trip-item">
                        {id ? <button onClick={handleDelete} value={trip.id} title="Delete"><MdRemoveCircleOutline/></button> : null}
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
            {createTrip ? <CreateTrip/> : null}
            {id ? <>
            {createTrip? <button className="button add" onClick={()=> setCreateTrip(prevState => !prevState)}><MdCancel/></button>: <button className="add-button add" onClick={()=> setCreateTrip(prevState => !prevState)} title="Add A Trip"><FaPlus/></button>}</>: null}
            
        </div>
        </>
    )
}