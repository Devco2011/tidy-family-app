import React, { useContext, useEffect } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { FamMemberCard } from "./FamMemCard"
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

export const ChooseFamMember = () => {
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()

    useEffect(() => {
        getFamMembers()
    }, [])
    return (
        <>
            <Container fluid className='bg-danger' >
                <h4>Family Members</h4>
                <button onClick={() => { history.push("/famMembers/create") }}>
                    Add A Family Member
        </button>
                <div className="famMembers">
                    {famMembers.map(famMember => {
                        return <ChooseFamMemberCard key={famMember.id} famMember={famMember} />
                    })
                    }
                </div>
            </Container>
        </>
    )


}