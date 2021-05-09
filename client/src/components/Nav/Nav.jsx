import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <Link to="signup">Sign Up</Link>
            <Link to="login">Login</Link>
            <Link to="/">All Trips</Link>
            <Link to="/create-trip">Add Trip</Link>
            <Link to="/my-trips">My Trips</Link>
        </div>
    )
}
