import React from "react"
import { Link } from "react-router-dom"
import { Button } from 'reactstrap';



export const WheelAwardsDetail = ({ wheelAward }) => (

    <div className="wheelAwardDetail mt-4">

        <h3>{wheelAward.name}</h3>

        <p><strong>Description:</strong></p>
        <p>{wheelAward.description}</p>
        <Button color="warning mb-3" onClick={event => {
            event.preventDefault()
        }}><Link to={`/wheelAwards/edit/${wheelAward.id}`}>
                Edit</Link></Button>


    </div>


);