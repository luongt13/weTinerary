import {useState} from 'react'
import {registerUser} from "../../services/auth"

export default function SignUp() {
    const [form, setForm] = useState({})

    function handleChange(event) {
        let {name, value} = event.target
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await registerUser(form)
    }
    
    return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="email" value={form.email}/>
        <input name="password" type="password" placeholder="password" value={form.password}/>
        <input name="password_confirmation" type="password" placeholder="confirm password" value={form.password}/>
        <button type="submit">Create</button>
    </form>
    )
}

