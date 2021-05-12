import {useParams} from "react-router-dom"
import {MdRemoveCircleOutline} from "react-icons/md"
import {deleteActivity} from "../../services/activities"
import "./Edit.css"

export default function Form(props) {
    let {id, day_id} = props.activity
    let params = useParams()
    //handle delete activity
    async function handleDelete(e) {
        e.preventDefault()
        await deleteActivity(params.id, day_id, id)
        props.setShowForm(prevState => !prevState)
        props.setToggle(prevState => !prevState)
    }

    return (
        <form onChange={(e) => props.handleEditChange(e, props.activity.id)}>
            {props.activity ? 
            <>
            <input name="start" type="time" defaultValue={props.activity.start}/>
            <input id="name" name="name" type="text" defaultValue={props.activity.name}/>
            <input name="location" type="text" defaultValue={props.activity.location}/>
            </> : <div></div> }  
            <button title="Delete" onClick={handleDelete}><MdRemoveCircleOutline/></button>
        </form>
    )
}