import {useState, useEffect} from 'react'
import {MdRemoveCircleOutline} from "react-icons/md"
import {Link, useParams} from "react-router-dom"
import {deleteATrip, getAllTrips} from "../../services/trips"
import {getUserTrips} from "../../services/trips"
import CreateTrip from '../CreateTrip/CreateTrip'
import AddButtons from "../AddButtons/AddButtons.jsx"
import TripInformation from "../TripInformation/TripInformation.jsx"
import Search from "../Search/Search"

import "./TripList.css"

export default function TripList(props) {
    const [trips, setTrips] = useState([])
    const [createForm, setCreateForm] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [filteredTrips, setFilteredTrips] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
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

    function displayList() {
        if (searchTerm.length > 2 && filteredTrips) {
            return (
                filteredTrips.map((trip) => {
                    return (
                        <div className="trip-item" key={trip.id}>
                            <Link to={`/trips/${trip.id}`} className="item">
                                <TripInformation trip={trip}/>
                            </Link>
                        </div>
                    )
                })
            )
        } else if (trips) {
            return (
                trips.map((trip)=> {
                    return (
                        <div key={trip.id} className="trip-item">
                            {id ? <button onClick={handleDelete} value={trip.id} title="Delete"><MdRemoveCircleOutline value={trip.id}/></button> : null}
                            <Link to={`/trips/${trip.id}`} className="item">
                                <TripInformation trip={trip}/>
                            </Link>
                        </div>
                    )
                })
            )
        }
    }
    return (
    <>
        <div className="page-intro">
            <h1>weTinerary</h1>
            {id ? <h4>share your next adventure</h4> : <h4>get inspirations for your next adventure</h4>}
            <div className="search-bar">
                {id ? <div></div> : <Search setFilteredTrips={setFilteredTrips} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>}    
            </div>
        </div>
        <div className="trip-list">
            {displayList()}
        </div>
        <div>
            <div className="add-form">
            {createForm ? <CreateTrip/> : null}
            </div>
            <div className="add-button">
                {id ? <AddButtons createForm={createForm} setCreateForm={setCreateForm}/>: null} 
            </div>
        </div>
    </>
    )
}