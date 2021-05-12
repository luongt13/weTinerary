import {useState} from 'react'
import {Link} from "react-router-dom"
import Login from "../Login/Login.jsx"
import Signup from "../SignUp/Signup.jsx"

export default function Home(props) {

    const [toggleForm, setToggleForm] = useState(false)

    return (
        <div className="intro-container">
            <div className="intro-card">
                <h1>weTinerary</h1>
                <h4>share your itinerary and get inspirations for your next adventure</h4>
                <Link to="/trips"><button className="create-btn">Get Inspired</button></Link>
            </div>
        {!toggleForm ? <Login verify={props.verify} setToggleForm={setToggleForm}/> : <Signup setToggleForm={setToggleForm}/>}
    </div>
    )
}
