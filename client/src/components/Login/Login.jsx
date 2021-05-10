import {useState} from 'react'
import {loginUser} from "../../services/auth"
import "./Login.css"

export default function Login(props) {
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
        await loginUser(form)
        props.verify()
    }
    return (
    <form className="user-form" onChange={handleChange} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input name="email" type="email" placeholder="email" value={form.email}/>
        <input name="password" type="password" placeholder="password" value={form.password}/>
        <button type="submit">Login</button>
    </form>
    )
}
