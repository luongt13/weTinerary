import React from 'react'
import "./Search.css"

export default function Search(props) {
    let {searchTerm, setSearchTerm, setFilteredTrips, trips} = props
    function handleChange(e) {
        setSearchTerm(e.target.value)
        setFilteredTrips(
            trips.filter((trip) => 
                trip.location
                    .toLowerCase()
                    .replace(/ /g, "")
                    .includes(searchTerm.replace(/ /g, ""))
            )
        )
    }
    return (
        <div className="search-input">
            <input type='text' name='search' id='search' placeholder='Search location' value={searchTerm} onChange={handleChange}/>
        </div>
    )
}
