import React from "react"
import { Link } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const ChoreCard = ({ chore }) => (
    <Container>
        <Card>
            <CardHeader tag="h3">{chore.name}</CardHeader>
            <CardBody>
                <CardTitle>Instructions</CardTitle>
                <CardText>{chore.instructions}</CardText>
                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/chores/completedForm/${chore.id}`}>
                        I Completed This!</Link></Button>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>
);