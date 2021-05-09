import React from 'react'
import {deleteADay} from "../../services/days"
export default function Delete(props) {

    async function handleDelete(){
        const res = await deleteADay(props.trip_id, props.day_id)
        console.log(res)
        props.setToggle(prevState => !prevState)
    }
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
