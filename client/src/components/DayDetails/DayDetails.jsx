import {useState, useEffect} from 'react'
import {MdCancel, MdEdit} from "react-icons/md"
import {TiPlus} from "react-icons/ti"
import {FaSave} from "react-icons/fa"
import Edit from "../Edit/Edit.jsx"
import {createActivity} from "../../services/activities"
import {useParams} from "react-router-dom"
import {updateADay} from "../../services/days"
import "./DayDetails.css"

export default function DayDetails(props) {
    const [activities, setActivities] = useState(props.activities)
    const [showForm, setShowForm] = useState(false)
    const [addActivity, setAddActivity] = useState(false)
    const [formInput, setFormInput] = useState({})
    let day_id = props.activities[0].day_id
    let {id} = useParams()

    useEffect(() => {
        setActivities(props.activities)
    }, [props.activities])

    function handleChange(event) {
        let {name, value} = event.target
        setFormInput((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleEditChange(event, id) {
        let {name, value} = event.target
        let updatedActivities = [...activities]
        updatedActivities = updatedActivities.map((activity) => {
            if(activity.id === id)  {
                return ({
                    ...activity,
                    [name]: value
                })
            } else {
                return activity
            }
        })
        setActivities(updatedActivities)
    }

    async function handleEdit() {
        await updateADay(id, day_id, {activities_attributes: activities})
        setShowForm(prevState => !prevState)
        props.setToggle(prevState => !prevState)
    }

    async function handleSubmit(event){
        event.preventDefault()
        await createActivity(id, day_id, formInput)
        setAddActivity(prevState => !prevState)
        props.setToggle(prevState => !prevState)
        setFormInput("")
    }

    function displayAdd() {
        if (addActivity) {
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
        } else {<div></div>}
    }

    function displayEditButtons() {
        if (props.currentUser && props.currentUser.id === props.trip) {
            if (showForm) {
                return (
                    <button onClick={() => setShowForm(prevState => !prevState)} title="Cancel"><MdCancel/></button>
                )
            } else {
                return (
                    <button onClick={() => setShowForm(prevState => !prevState)} title="Edit"><MdEdit/></button>
                )
            }
        } else {
            <div></div>
        }

    }

    function displayAddButtons() {
        if (props.currentUser && props.currentUser.id === props.trip) { 
            if (addActivity) {
                return (
                    <button onClick={() => setAddActivity(prevState => !prevState)} title="Cancel"><MdCancel/></button> 
                )
    
            } else {
                return (
                    <button onClick={() => setAddActivity(prevState => !prevState)} title="Add An Activity"><TiPlus/></button>
                ) 
            }
        } else {
            <div></div>
        }
    }
    return (
        <div>
            {props.activities && activities.map((activity) => {
                return (
                    <div key={activity.id}>
                        {showForm ? <Edit activity={activity} handleEdit={handleEdit} handleEditChange={handleEditChange} setToggle={props.setToggle} setShowForm={setShowForm}/> :
                        <div className="activity-details">
                            <h6>{activity.start}</h6>
                            <h3>{activity.name}</h3>
                            <p>{activity.location}</p>
                        </div>
                        } 
                    </div>
                )
            }) }
                {showForm ? <button title="Save" onClick={handleEdit}><FaSave/></button> : null}
            {displayAdd()}
            {displayEditButtons()}
            {displayAddButtons()}
        </div>
    )
}