import React, { useContext, useEffect, useState } from "react"
import { ChoreContext } from "./ChoreProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
} from 'reactstrap';


export const ChoreDetail = ({ chore }) => (

    <Container>
        <Card>
            <CardHeader tag="h3">{chore.name}</CardHeader>
            <CardBody>
                <CardTitle>Instructions:</CardTitle>
                <CardText>{chore.instructions}</CardText>
                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/chores/edit/${chore.id}`}>
                        Edit</Link></Button>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>


);