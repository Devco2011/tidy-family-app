import React from "react"
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Row } from 'reactstrap';


export const FamMemberCard = ({ famMember }) => (

    <Container>

        <ListGroup>
            <ListGroupItem tag="button" action><Link to={`/famMembers/detail/${famMember.id}`}>
                {famMember.name}
                <img width="30%" hieght="35%" src={famMember.profilePic.src} alt="Picture" />
            </Link></ListGroupItem>
        </ListGroup>
    </Container>
);


