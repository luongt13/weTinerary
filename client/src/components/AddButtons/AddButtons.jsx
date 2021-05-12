import React from 'react'
import {FaPlus} from "react-icons/fa"
import {MdCancel} from "react-icons/md"

export default function AddButtons(props) {
    return (
        <div>
            {props.createForm ? <button className="button add" onClick={()=> props.setCreateForm(prevState => !prevState)} title="Cancel"><MdCancel/></button> : <button className="button add" onClick={()=> props.setCreateForm(prevState => !prevState)} title="Add"><FaPlus/></button>}
        </div>
    )
}
