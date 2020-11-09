import React from "react"
import { Button, CardBody } from 'reactstrap';

export const ProfilePicCard = ({ profilePic }) => (
    <div>
        <img width="60%" hieght="65%" src={profilePic.src} alt="Picture" />

        <CardBody>
            <Button onClick={event => {
                event.preventDefault()
                sessionStorage.setItem("profilePic", profilePic.id)
            }}>Select</Button>
        </CardBody>
    </div>
);