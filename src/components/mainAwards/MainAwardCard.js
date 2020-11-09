import React from "react"
import { Link } from "react-router-dom";
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
} from 'reactstrap';


export const MainAwardCard = ({ mainAward }) => (
    <Container>
        <Card>
            <CardHeader tag="h3">{mainAward.name}</CardHeader>
            <CardBody>
                <Button onClick={event => {
                    event.preventDefault()
                }}><Link to={`/mainAwards/detail/${mainAward.id}`}>
                        Details</Link></Button>
            </CardBody>
            <CardFooter className="text-muted">Points Value: {mainAward.pointsValue}</CardFooter>
        </Card>
    </Container>
);