import React from "react"
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Row } from 'reactstrap';


export const AvailableChoreCard = ({ chore }) => (
    <Container>
        <ListGroup>
            <ListGroupItem tag="button" action><Link to={`/chores/detail/${chore.id}`}>
                {chore.name}
                <Row>Instructions: {chore.instructions}</Row>
            </Link></ListGroupItem>
        </ListGroup>
    </Container>
);