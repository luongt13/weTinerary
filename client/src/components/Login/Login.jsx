import {useState} from 'react'
import {loginUser} from "../../services/auth"
import {useHistory} from "react-router-dom"
import "./Login.css"

export default function Login(props) {
    const [form, setForm] = useState({})
    let history = useHistory()
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
        history.push("/")
    }
    return (
    <form className="user-form" onChange={handleChange} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input name="email" type="email" placeholder="email" defaultValue={form.email}/>
        <input name="password" type="password" placeholder="password" defaultValue={form.password}/>
        <button type="submit">Login</button>
    </form>
    )
}