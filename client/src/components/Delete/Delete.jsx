import React from 'react'
import {MdDelete} from "react-icons/md"
import {deleteADay} from "../../services/days"

export default function Delete(props) {
    async function handleDelete(){
        await deleteADay(props.trip_id, props.day_id)
        props.setToggle(prevState => !prevState)
    }
    return (
        <div>
            <button onClick={handleDelete} title="Delete"><MdDelete/></button>
        </div>
    )
}
