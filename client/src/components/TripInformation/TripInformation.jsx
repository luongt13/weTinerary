import React from 'react'

export default function TripInformation(props) {
    return (
        <>
        <h3>{props.trip.name}</h3>
        <h5>{props.trip.location}</h5>
        <p>{props.trip.description}</p>
        </>
    )
}
