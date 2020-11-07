import React from "react"
import { Link, useHistory } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const CompletedChoreCard = ({ chore }) => (

    <div className="compChoreCard mt-3">

        <h3>{chore.name}</h3>

        <p><strong>Instructions:</strong></p>
        <p>{chore.instructions}</p>
        <p>Completed by: <h5>{chore.familyMember.name}</h5></p>
        <p>Completed: {chore.date}</p>

        <h4>Points Value: {chore.pointsValue}</h4>

    </div>

);