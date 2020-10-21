import React from "react"
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem } from 'reactstrap';


export const FamMemberCard = ({ famMember }) => (
    <Container>
        <ListGroup>
            <ListGroupItem tag="button" action><Link to={`/famMembers/detail/${famMember.id}`}>
                <h3 className="text-warning">{famMember.name}</h3>
                <h5 className="text-success">Current Points: {famMember.points}</h5>
            </Link></ListGroupItem>
        </ListGroup>
    </Container>
);


