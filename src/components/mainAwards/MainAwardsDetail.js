import React, { useContext, useEffect, useState } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
} from 'reactstrap';


export const MainAwardsDetail = ({ mainAward }) => (

    <Container>
        <Card>
            <CardHeader tag="h3">{mainAward.name}</CardHeader>
            <CardBody>
                <CardTitle>Description:</CardTitle>
                <CardText>{mainAward.description}</CardText>
                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/mainAwards/edit/${mainAward.id}`}>
                        Edit</Link></Button>

            </CardBody>
            <CardFooter className="text-muted">Points Value: {mainAward.pointsValue}</CardFooter>
        </Card>
    </Container>


);