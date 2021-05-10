import {useParams} from "react-router-dom"
import {MdRemoveCircleOutline} from "react-icons/md"
import {deleteActivity} from "../../services/activities"
import "./Form.css"

export default function Form(props) {
    let {id, day_id} = props.activity
    let params = useParams()

    async function handleDelete(e) {
        e.preventDefault()
        let res = await deleteActivity(params.id, day_id, id)
        console.log(res)
        props.setShowForm(prevState => !prevState)
        props.setToggle(prevState => !prevState)
    }

    return (
        <form onChange={(e) => props.handleEditChange(e, props.activity.id)}>
            {props.activity ? 
            <>
            <input name="start" type="time" value={props.activity.start}/>
            <input className="name" name="name" type="text" value={props.activity.name}/>
            <input name="location" type="text" value={props.activity.location}/>
            </> : <div></div> }  
            <button title="Delete" onClick={handleDelete}><MdRemoveCircleOutline/></button>
        </form>
    )
}