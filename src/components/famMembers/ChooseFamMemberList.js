import React, { useContext, useEffect } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { ChooseFamMemberCard } from "./ChooseFamMemberCard"
import { Row, Col } from 'reactstrap';

export const ChooseFamMemberList = () => {
    const { famMembers, getFamMembers } = useContext(FamMemberContext)


    useEffect(() => {
        getFamMembers()
    }, [])
    return (
        <>
            <div className="chooseListMain" align="center">
                <Row>
                    <Col>
                        <h4>Which family member are you?</h4>
                        <div className="chooseListContainer">
                            {famMembers.map(famMember => {
                                if (famMember?.familyId === parseInt(localStorage.getItem("family_id")))
                                    return <ChooseFamMemberCard key={famMember.id} famMember={famMember} />
                            })
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )


}