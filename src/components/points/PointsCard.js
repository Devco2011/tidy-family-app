import React from "react"
import { Link, useHistory } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const PointsCard = ({ chore }) => (

    <Container>
        <Card>
            <CardHeader tag="h3">Current Points:</CardHeader>
            <CardBody>
                <CardTitle>Instructions:</CardTitle>
                <CardText>{chore.instructions}</CardText>
                <CardTitle>Completed by: {chore.familyMember.name}</CardTitle>
                <CardTitle>When this chore was completed: {chore.date}</CardTitle>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>

);