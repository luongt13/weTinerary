import React from 'react'
import {Link} from "react-router-dom"
import {RiLogoutBoxRLine} from "react-icons/ri"
import "./Nav.css"

export default function Nav(props) {
    //display nav depending if a user is logged in or not
    function displayNav() {
        if (props.currentUser) {
            return (
            <div className="nav">
                <Link to="/">All Trips</Link>
                <Link to={`/my-trips/${props.currentUser.id}`}>My Trips</Link>
                <div className="logout">
                <button className="button" onClick={props.logout}> <RiLogoutBoxRLine/> Logout</button>
                </div>
            </div>
            )
        } else {
            return (
            <div className="nav">
                <Link to="signup">Sign Up</Link>
                <Link to="login">Login</Link>
                <Link to="/">All Trips</Link>
            </div>
            )
        }
    } 
    return (
    <>
        {displayNav()}
    </>
    )
}
