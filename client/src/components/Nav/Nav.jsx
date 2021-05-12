import React from 'react'
import {Link} from "react-router-dom"
import {FaSearch} from "react-icons/fa"
import {ImList2} from "react-icons/im"
import {FiLogOut} from "react-icons/fi"
import "./Nav.css"

export default function Nav(props) {
    //display nav depending if a user is logged in or not
    function displayNav() {
        if (props.currentUser) {
            return (
            <div className="nav">
                <div className="desktop">
                    <img src="/images/wet-logo.png" className="logo" alt="wetinerary logo"/>
                    <Link to="/trips">Trips</Link>
                    <Link to={`/my-trips/${props.currentUser.id}`}>My Trips</Link>
                    <div className="logout">
                    <button className="button" onClick={props.logout}> Logout</button>
                    </div>
                </div>
                <div className="mobile">
                    <img src="/images/wet-logo.png" className="logo" alt="wetinerary logo"/>
                    <Link to="/trips"><FaSearch/></Link>
                    <Link to={`/my-trips/${props.currentUser.id}`}><ImList2/></Link>
                    <div className="logout">
                    <button className="button" onClick={props.logout}> <FiLogOut/></button>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
            <div className="nav">
                <img src="/images/wet-logo.png" className="logo" alt="wetinerary logo"/>
                <div className="nav forms">
                    <Link to="/">Login/Sign up</Link>
                </div>
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
