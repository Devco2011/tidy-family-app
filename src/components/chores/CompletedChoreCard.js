import React from "react"
import { Link, useHistory } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const CompletedChoreCard = ({ chore }) => (

    <Container>
        <Card>
            <CardHeader tag="h3">{chore.name}</CardHeader>
            <CardBody>
                <CardTitle>Instructions:</CardTitle>
                <CardText>{chore.instructions}</CardText>
                <CardTitle>Completed by: {chore.familyMember.name}</CardTitle>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>

);