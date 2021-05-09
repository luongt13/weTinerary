import {useState} from 'react'
import Form from "../Form/Form"
import {createActivity} from "../../services/activities"
import {useParams} from "react-router-dom"

export default function DayDetails(props) {
    const [showForm, setShowForm] = useState(false)
    const [addActivity, setAddActivity] = useState(false)
    const [formInput, setFormInput] = useState({})
    let day_id = props.activities[0].day_id
    let {id} = useParams()

    function handleChange(event) {
        let {name, value} = event.target
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(event){
        event.preventDefault()
        let res = await createActivity(id, day_id, formInput)
        props.setToggle(prevState => !prevState)
        setAddActivity(prevState => !prevState)
        setFormInput("")
    }

    function displayAdd() {
        if (addActivity) {
            return (
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <label htmlFor="name">What's the activity?</label>
                    <input name="name" type="text" value={formInput.name}/>
                    <label htmlFor="location">Where is the activity?</label>
                    <input name="location" type="text" value={formInput.location}/>
                    <button type="submit">Save</button>
                </form>
            )
        }
    }

    return (
        <div>
            {props.activities && props.activities.map((activity) => {
                return (
                    <div key={activity.id}>
                        {showForm ? <Form activity={activity} setToggle={props.setToggle} setShowForm={setShowForm}/> :
                        <div>
                            <h3>{activity.name}</h3>
                            <p>{activity.location}</p>
                        </div>

                    } 
                    </div>
                )
            }) }
            {displayAdd()}
        {showForm ? <button onClick={() => setShowForm(prevState => !prevState)}>Cancel</button>   :   <button onClick={() => setShowForm(prevState => !prevState)}>Edit</button> }
        {addActivity ? <button onClick={() => setAddActivity(prevState => !prevState)}>Cancel</button> :<button onClick={() => setAddActivity(prevState => !prevState)}>Add Activity</button>}
        
        </div>
    )
}
