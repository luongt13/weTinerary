import {useState} from 'react'
import {searchTrip} from "../../services/trips"
import "./Search.css"

export default function Search(props) {
    let {setFilteredTrips} = props
    // let {searchTerm, setSearchTerm, setFilteredTrips, trips} = props
    const [term, setTerm] = useState("")

    async function handleSearch(value) {
        let res = await searchTrip({location: value})
        setFilteredTrips(res)
    }
    // function handleChange(e) {
    //     setSearchTerm(e.target.value)
    //     setFilteredTrips(
    //         trips.filter((trip) => 
    //             trip.location
    //                 .toLowerCase()
    //                 .replace(/ /g, "")
    //                 .includes(searchTerm.replace(/ /g, ""))
    //         )
    //     )
    // }
    function handleChange(e) {
        setTerm(e.target.value)
        handleSearch(e.target.value)
    }

    return (
        <div className="search-input">
            <input type='text' name='search' id='search' placeholder='Search location' value={term} onChange={handleChange}/>
        </div>
    )
}