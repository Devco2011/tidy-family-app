import React from "react"
import { Link } from "react-router-dom";
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
                <Button>I Completed This!</Button>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>
);