import {useState, useEffect} from 'react'
import {MdRemoveCircleOutline} from "react-icons/md"
import {Link, useParams} from "react-router-dom"
import {deleteATrip, getAllTrips} from "../../services/trips"
import {getUserTrips} from "../../services/trips"
import CreateTrip from '../CreateTrip/CreateTrip'
import AddButtons from "../AddButtons/AddButtons.jsx"
import Search from "../Search/Search"

import "./TripList.css"

export default function TripList(props) {
    const [trips, setTrips] = useState([])
    const [createForm, setCreateForm] = useState(false)
    const [toggle, setToggle] = useState(false)

    // const [searchTerm, setSearchTerm] = useState("")
    const [filteredTrips, setFilteredTrips] = useState([])
    let {id} = useParams()

    useEffect(() => {
        fetch()
        return () => {}
        // eslint-disable-next-line
    }, [toggle, props.currentUser])
    //if there's for a user page, get their trip else get all trips in the database
    async function fetch() {
        if (!id) {
            let data = await getAllTrips()
            setTrips(data)
        } else if (props.currentUser) {
            let data = await getUserTrips()
            setTrips(data)
        } 
    }
    //handle delete
    async function handleDelete(event) {
        event.preventDefault()
        await deleteATrip(event.target.value)
        setToggle(prevState => !prevState)
    }
    return (
    <>
        <div className="page-intro">
            <h1>weTinerary</h1>
            {id ? <h4>share your next adventure</h4> : <h4>get inspirations for your next adventure</h4>}
            <div className="search-bar">
                {id ? <div></div> : <Search setFilteredTrips={setFilteredTrips}/>}    
            </div>
        </div>
        <div className="search-list">
            {filteredTrips && filteredTrips.map((trip) => {
                    return (
                        <div className="search-item" key={trip.id}>
                            <Link to={`/trips/${trip.id}`} className="item">
                                <h3>{trip.name}</h3>
                                <h5>{trip.location}</h5>
                            </Link>
                        </div>
                    )
                })}
        </div>
        <div className="trip-list">
            {trips.map((trip)=> {
                return (
                    <div key={trip.id} className="trip-item">
                        {id ? <button onClick={handleDelete} value={trip.id} title="Delete"><MdRemoveCircleOutline value={trip.id}/></button> : null}
                        <Link to={`/trips/${trip.id}`} className="item">
                            <h3>{trip.name}</h3>
                            <h5>{trip.location}</h5>
                            <p>{trip.description}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
        <div className="add-button">
            {createForm ? <CreateTrip/> : null}
            {id ? <AddButtons createForm={createForm} setCreateForm={setCreateForm}/>: null} 
        </div>
    </>
    )
}