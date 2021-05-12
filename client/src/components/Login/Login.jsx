import {useState} from 'react'
import {loginUser} from "../../services/auth"
import {useHistory} from "react-router-dom"
import "./Login.css"

export default function Login(props) {
    const [form, setForm] = useState({})
    let history = useHistory()
    //handle form change
    function handleChange(event) {
        let {name, value} = event.target
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    //handle login 
    async function handleSubmit(event) {
        event.preventDefault()
        let res = await loginUser(form)
        props.verify()
        if (res.token) {
            history.push("/trips")
        } else {
            alert("Invalid email and/or password")
        }
    }

    return (
    <div className="form-layout">
        <form className="user-form" onChange={handleChange} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input name="email" type="email" placeholder="email" defaultValue={form.email}/>
            <input name="password" type="password" placeholder="password" defaultValue={form.password}/>
            <button type="submit" className="submit-btn">Login</button>            
        </form>
        <button className="create-btn" onClick={() => props.setToggleForm(prevState => !prevState)}>Create Account</button>
    </div>
    )
}