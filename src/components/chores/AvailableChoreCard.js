import React from "react"
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';


export const AvailableChoreCard = ({ chore }) => (


    <div className="availChoreCard mb-3">
        <h3>{chore.name}</h3>

        <p><strong>Instructions:</strong></p>
        {chore.instructions}
        <Button className="completedChore mb-3 mt-3" color="warning" onClick={event => {
            event.preventDefault()
        }}><Link to={`/chores/completedForm/${chore.id}`}>
                Did you complete this?</Link></Button>

        <h4>Points Value: {chore.pointsValue}</h4>

    </div>


);