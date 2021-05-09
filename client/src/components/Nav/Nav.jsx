import React from 'react'
import {Link, useHistory} from "react-router-dom"
import {GrAdd} from "react-icons/gr"
import {RiLogoutBoxRLine} from "react-icons/ri"
import "./Nav.css"
export default function Nav(props) {
    let history = useHistory()
    function handleLogout(){
        localStorage.clear()
        history.push("/")
    }

    function displayNav() {
        if (props.currentUser) {
            return (
            <div className="nav">
                <Link to="/">All Trips</Link>
                {/* <Link to="/create-trip">Add Trip</Link> */}
                <Link to="/my-trips">My Trips </Link>
                
                <button className="button" onClick={handleLogout}> <RiLogoutBoxRLine/> Logout</button>
            </div>
            )
        } else {
            <div className="nav">
                <Link to="signup">Sign Up</Link>
                <Link to="login">Login</Link>
                <Link to="/">All Trips</Link>
            </div>
        }
    }
    
    return (
        <>
            {displayNav()}
        </>
    )
}
