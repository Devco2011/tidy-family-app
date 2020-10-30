import React from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

export const ChooseFamMemberCard = ({ famMember }) =>

    (


        < div >

            <Card>
                <CardImg top width="100%" src={famMember.profilePic.src} alt="Picture" />
                <CardBody>
                    <CardTitle>{famMember.name}</CardTitle>
                    <Button onClick={event => {
                        event.preventDefault()
                        sessionStorage.setItem("family_member", famMember.name)
                        sessionStorage.setItem("family_memberId", famMember.id)
                        sessionStorage.setItem("admin", famMember.admin)
                    }}><Link to={`/famMembers/detail/${famMember.id}`}>This is me!</Link></Button>
                </CardBody>
            </Card>

        </div >
    )
