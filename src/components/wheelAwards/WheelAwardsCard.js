import React from "react"
import { Link } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardBody,
} from 'reactstrap';


export const WheelAwardCard = ({ wheelAward }) => (
    <Container>
        <Card>
            <CardHeader tag="h3">{wheelAward.name}</CardHeader>
            <CardBody>

                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/wheelAwards/detail/${wheelAward.id}`}>
                        Details</Link></Button>

            </CardBody>

        </Card>
    </Container>
);