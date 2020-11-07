import React from "react"
import { Link, useHistory } from "react-router-dom";
import { CompletedChoreModal } from "./CompletedChoreModal"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const AvailableChoreCard = ({ chore }) => (


    <div className="availChoreCard">
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