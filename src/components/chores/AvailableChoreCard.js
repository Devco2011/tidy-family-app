import React from "react"
import { Link, useHistory } from "react-router-dom";
import { CompletedChoreModal } from "./CompletedChoreModal"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const AvailableChoreCard = ({ chore }) => (

    <Container>
        <Card>
            <CardHeader tag="h3">{chore.name}</CardHeader>
            <CardBody>
                <CardTitle>Instructions</CardTitle>
                <CardText>{chore.instructions}</CardText>
                <Button className="completedChore" onClick={event => {
                    event.preventDefault()
                }}><Link to={`/chores/completedForm/${chore.id}`}>
                        I Completed This!</Link></Button>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>

);