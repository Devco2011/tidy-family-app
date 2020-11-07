import React, { useContext, useEffect, useState } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
} from 'reactstrap';



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