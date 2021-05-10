import {useState} from 'react'
import {FaSave} from "react-icons/fa"
import {updateADay} from "../../services/days"
import {useParams} from "react-router-dom"
import "./Form.css"

export default function Form(props) {
    // let {name, location, day_id, id} = props.activity
    // let params = useParams()
    // let trip_id = (parseInt(params.id))
    // const [form, setForm] = useState({
    //         id,
    //         name: name,
    //         location: location
        
    // })
    // function handleChange(event) {
    //     let {name, value} = event.target
    //     setForm(prevState => ({
    //         ...prevState,
    //         id,
    //         [name]: value
    //     }))
    // }
    // function handleChange(event) {
    //     let {name, value} = event.target
    //     setForm(prevState => ({
    //         ...prevState,
    //         id,
    //         [name]: value
    //     }))
    //     props.handleEdit()
    // }
    // async function handleSubmit(event){
    //     event.preventDefault()
    //     await updateADay(trip_id, day_id, {activities_attributes: form})
    //     props.setToggle(prevState => !prevState)
    //     props.setShowForm(prevState => !prevState)
    // }
    // console.log(props)
    return (
        <form onChange={(e) => props.handleEditChange(e, props.activity.id)}>
            {props.activity ? 
            <>
            <input className="name" name="name" type="text" value={props.activity.name}/>
            <input name="location" type="text" value={props.activity.location}/>
            </> : 
            <div></div>            
            }  
        </form>

    )
}
