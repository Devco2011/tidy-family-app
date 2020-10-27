import React from "react"
import { Link, useHistory } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export const PointsCard = ({ chore }) => (

    <Container>
        <Card>

            <CardFooter className="text-muted">`${totalPoints}</CardFooter>
        </Card>
    </Container>

);