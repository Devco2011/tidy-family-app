import React from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

export const ChooseFamMemberCard = ({ famMember }) =>

    (


        < div className="chooseFamCard">


            <img width="30%" hieght="35%" src={famMember.profilePic.src} alt="Picture" />
            <CardBody className="chooseFamContainer">
                <CardTitle><h4>{famMember.name}</h4></CardTitle>
                <Button color="warning" onClick={event => {
                    event.preventDefault()
                    sessionStorage.setItem("family_member", famMember.name)
                    sessionStorage.setItem("family_memberId", famMember.id)
                    sessionStorage.setItem("admin", famMember.admin)
                }}><Link to={`/famMembers/detail/${famMember.id}`}>Choose</Link></Button>
            </CardBody>


        </div >
    )
