import {useState} from 'react'
import {registerUser} from "../../services/auth"
import {useHistory, Link} from "react-router-dom"
import "./Signup.css"

export default function SignUp() {
    //set state for form 
    const [form, setForm] = useState({})
    let history = useHistory()
    //handle change in form and set the form state
    function handleChange(event) {
        let {name, value} = event.target
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    //handle button submit to register user
    async function handleSubmit(event) {
        event.preventDefault()
        await registerUser(form)
        history.push("/login")
    }
    
    return (
    <div className="intro-container">
        <div className="intro-card">
            <h1>weTinerary</h1>
            <h4>share your itinerary and get inspirations for your next adventure</h4>
        </div>
        <form className="user-form" onChange={handleChange} onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            <input name="email" type="email" placeholder="email" defaultValue={form.email}/>
            <input name="password" type="password" placeholder="password" defaultValue={form.password}/>
            <input name="password_confirmation" type="password" placeholder="confirm password" defaultValue={form.password_confirmation}/>
            <button type="submit" className="submit-btn">Sign Up</button>
            <Link to="/login"><button className="create-btn">Login</button></Link>
        </form>
    </div>
    )
}

