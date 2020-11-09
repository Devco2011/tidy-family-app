import React from "react"
import { Link } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody
} from 'reactstrap';


export const ChoreCard = ({ chore }) => (
    <Container>
        <Card>
            <CardHeader tag="h3">{chore.name}</CardHeader>
            <CardBody>
                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/chores/detail/${chore.id}`}>
                        Chore Details</Link></Button>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
        </Card>
    </Container>
);