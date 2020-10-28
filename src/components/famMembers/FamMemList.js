import React, { useContext, useEffect } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { FamMemberCard } from "./FamMemCard"
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';


export const FamMembersList = () => {
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()

    useEffect(() => {
        getFamMembers()
    }, [])
    return (
        <>
            <Container fluid >
                <h4>Family Members</h4>
                <button onClick={() => { history.push("/famMembers/create") }}>
                    Add A Family Member
        </button>
                <div className="famMembers">
                    {famMembers.map(famMember => {
                        if (famMember?.familyId === parseInt(localStorage.getItem("family_id")))
                            return <FamMemberCard key={famMember.id} famMember={famMember} />
                    })
                    }
                </div>

            </Container>
        </>
    )


}