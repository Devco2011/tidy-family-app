import React, { useContext, useEffect } from "react"
import { FamMemberContext } from "./FamMemberProvider"
import { FamMemberCard } from "./FamMemCard"
import { useHistory } from "react-router-dom"

export const FamMembersList = () => {
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()

    useEffect(() => {
        getFamMembers()
    }, [])
    return (
        <>
            <h2>Family Members</h2>
            <button onClick={() => { history.push("/famMembers/create") }}>
                Add A Family Member
        </button>
            <div className="famMembers">
                {famMembers.map(famMember => {
                    return <FamMemberCard key={famMember.id} famMember={famMember} />
                })
                }
            </div>
        </>
    )


}