import {useState} from 'react'
import {registerUser} from "../../services/auth"
import "./Signup.css"

export default function SignUp(props) {
    //set state for form 
    const [form, setForm] = useState({})
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
        let res = await registerUser(form)
        if (res.errors) {
            for (const [key, value] of Object.entries(res.errors)) {
                console.log(`${key}: ${value}`)
                alert(`${key} ${value}`)
            }
        } else {
            props.setToggleForm(prevState => !prevState)
        }
    }
    
    return (
    <div className="form-layout">
        <form className="user-form" onChange={handleChange} onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input name="email" type="email" placeholder="email" defaultValue={form.email}/>
            <input name="password" type="password" placeholder="password" defaultValue={form.password}/>
            <input name="password_confirmation" type="password" placeholder="confirm password" defaultValue={form.password_confirmation}/>
            <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <button className="create-btn" onClick={() => props.setToggleForm(prevState => !prevState)}>Login</button>
    </div>
    )
}

