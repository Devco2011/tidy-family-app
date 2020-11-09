import React from "react"
import { Link } from "react-router-dom"
import { Button } from 'reactstrap';


export const ChoreDetail = ({ chore }) => (

    <div className="allChoreDetail mb-3">

        <h3>{chore.name}</h3>

        <p><strong>Instructions:</strong></p>
        <p>{chore.instructions}</p>
        <Button color="warning mb-3 ml-3" onClick={event => {
            event.preventDefault()
        }}><Link to={`/chores/edit/${chore.id}`}>
                Edit</Link></Button>

        <h4>Points Value: {chore.pointsValue}</h4>

    </div>


);