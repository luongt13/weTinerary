import {useState, useEffect} from 'react'
import {createActivity} from "../../services/activities"
import {FaSave} from "react-icons/fa"

export default function CreateActivity(props) {
    let {id, day_id} = props
    const [formInput, setFormInput] = useState({})

    useEffect(() => {
        return () => {}
    },[])
    
    function handleChange(event) {
        let {name, value} = event.target
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(event){
        event.preventDefault()
        await createActivity(id, day_id, formInput)
        props.setAddActivity(prevState => !prevState)
        props.setToggle(prevState => !prevState)
        setFormInput("")
    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="start">Start time</label>
        <input name="start" type="time" defaultValue={formInput.start}/>
        <label htmlFor="name">What's the activity?</label>
        <input name="name" type="text" defaultValue={formInput.name}/>
        <label htmlFor="location">Where is the activity?</label>
        <input name="location" type="text" defaultValue={formInput.location}/>
        <button type="submit" title="Save"><FaSave/></button>
    </form>
    )
}
