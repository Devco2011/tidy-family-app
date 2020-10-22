import React from "react"
import { Link } from "react-router-dom";
import { Card, Button, CardImg, CardBody } from 'reactstrap';

export const ProfilePicCard = ({ profilePic }) => (
    <Card>
        <CardImg top width="15%" src={profilePic.src} alt="Picture" />
        <CardBody>
            <Button onClick={event => {
                event.preventDefault()
                sessionStorage.setItem("profilePic", profilePic.id)
            }}>Select</Button>
        </CardBody>
    </Card >
);