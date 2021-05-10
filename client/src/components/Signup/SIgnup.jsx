import {useState} from 'react'
import {registerUser} from "../../services/auth"
import {useHistory} from "react-router-dom"

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
    <form className="user-form" onChange={handleChange} onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <input name="email" type="email" placeholder="email" value={form.email}/>
        <input name="password" type="password" placeholder="password" value={form.password}/>
        <input name="password_confirmation" type="password" placeholder="confirm password" value={form.password_confirmation}/>
        <button type="submit" className="submit-btn">Create</button>
    </form>
    )
}

