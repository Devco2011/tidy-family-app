import React from "react"
import { Link } from "react-router-dom";
import { Card, Button, CardImg, CardBody, Container } from 'reactstrap';

export const ProfilePicCard = ({ profilePic }) => (
    <Container>
        <img src={profilePic.src} alt="Picture" />

        <CardBody>
            <Button onClick={event => {
                event.preventDefault()
                sessionStorage.setItem("profilePic", profilePic.id)
            }}>Select</Button>
        </CardBody>
    </Container>
);