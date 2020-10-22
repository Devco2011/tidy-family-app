import React, { useContext, useEffect } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { ChooseFamMemberCard } from "./ChooseFamMemberCard"
import { useHistory } from "react-router-dom";
import { Container, Row, Col, CardGroup } from 'reactstrap';

export const ChooseFamMemberList = () => {
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()

    useEffect(() => {
        getFamMembers()
    }, [])
    return (
        <>
            <Container fluid >
                <h4>Hey there! Which family member are you?</h4>
                <CardGroup>
                    {famMembers.map(famMember => {
                        if (famMember?.familyId === parseInt(localStorage.getItem("family_id")))
                            return <ChooseFamMemberCard key={famMember.id} famMember={famMember} />
                    })
                    }
                </CardGroup>
            </Container>
        </>
    )


}