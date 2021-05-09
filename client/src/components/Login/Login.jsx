import {useState} from 'react'
import {loginUser} from "../../services/auth"

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
    <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="email" value={form.email}/>
        <input name="password" type="password" placeholder="password" value={form.password}/>
        <button type="submit">Login</button>
    </form>
    )
}
