import React, { useContext, useEffect, useState } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
} from 'reactstrap';


export const MainAwardsDetail = ({ mainAward }) => (

    <div className="mainAwardDetail mt-4">

        <h3>{mainAward.name}</h3>

        <p><strong>Description:</strong></p>

        <p>{mainAward.description}</p>

        <h4>Points Value: {mainAward.pointsValue}</h4>
        <Button color="warning mb-3" onClick={event => {
            event.preventDefault()
        }}><Link to={`/mainAwards/edit/${mainAward.id}`}>
                Edit</Link></Button>

    </div >


);