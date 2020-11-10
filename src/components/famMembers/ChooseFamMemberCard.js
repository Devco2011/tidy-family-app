import React from "react"
import { Link } from "react-router-dom"
import { Button, CardTitle, CardBody } from 'reactstrap';

export const ChooseFamMemberCard = ({ famMember }) =>

    (


        < div className="chooseFamCard">


            <img width="40%" hieght="45%" src={famMember.profilePic.src} alt="Picture" />
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
