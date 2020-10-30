import React from "react"
import { Link } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const WheelAwardCard = ({ wheelAward }) => (
    <Container>
        <Card>
            <CardHeader tag="h3">{wheelAward.name}</CardHeader>
            <CardBody>
                <CardTitle>Description:</CardTitle>
                <CardText>{wheelAward.description}</CardText>
                <CardTitle>This Award Requires {wheelAward.pointsReq} Points</CardTitle>

                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/wheelAwards/detail/${wheelAward.id}`}>
                        Details</Link></Button>

            </CardBody>

        </Card>
    </Container>
);