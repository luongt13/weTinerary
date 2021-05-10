import {useState} from 'react'
import {FaSave} from "react-icons/fa"
import {updateADay} from "../../services/days"
import {useParams} from "react-router-dom"
import "./Form.css"

export default function Form(props) {
    return (
        <form onChange={(e) => props.handleEditChange(e, props.activity.id)}>
            {props.activity ? 
            <>
            <input name="start" type="time" value={props.activity.start}/>
            <input className="name" name="name" type="text" value={props.activity.name}/>
            <input name="location" type="text" value={props.activity.location}/>
            </> : <div></div> }  
        </form>
    )
}