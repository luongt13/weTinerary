import React from 'react'
import {MdRemoveCircleOutline} from "react-icons/md"
import {deleteADay} from "../../services/days"

export default function DeleteDay(props) {
    async function handleDelete(){
        await deleteADay(props.trip_id, props.day_id)
        props.setToggle(prevState => !prevState)
    }
    return (
        <div>
            <button onClick={handleDelete} title="Delete"><MdRemoveCircleOutline/></button>
        </div>
    )
}