import {useState} from 'react'
import Form from "../Form/Form"

export default function DayDetails(props) {
    const [showForm, setShowForm] = useState(false)

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
                        {/* <button>Delete Activity</button> */}
                    </div>
                )
            }) }
        {showForm ? <button onClick={() => setShowForm(prevState => !prevState)}>Cancel</button>   :   <button onClick={() => setShowForm(prevState => !prevState)}>Edit</button>    }
        
        </div>
    )
}
