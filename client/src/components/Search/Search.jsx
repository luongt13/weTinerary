import {useState} from 'react'
import {searchTrip} from "../../services/trips"
import "./Search.css"

export default function Search(props) {
    let {setFilteredTrips} = props
    const [term, setTerm] = useState("")
    //search from backend
    async function handleSearch(value) {
        let res = await searchTrip({location: value})
        setFilteredTrips(res)
    }
    //sets the search tern and calls the handle search as the input changes
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