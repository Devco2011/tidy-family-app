import React, { useContext, useEffect, useState } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { useParams, useHistory } from "react-router-dom"

export const FamMemberDetail = () => {
    const { getFamMemberById } = useContext(FamMemberContext)

    const [famMember, setFamMember] = useState({})
    //const [location, setLocation] = useState({})


    const { famMemberId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", famMemberId)
        getFamMemberById(famMemberId)
            .then((response) => {
                setFamMember(response)
            })
    }, [])

    return (
        <section className="famMember">
            <h3 className="famMember__name">{famMember.name}</h3>
            <button onClick={() => {
                history.push(`/famMembers/edit/${famMember.id}`)
            }}>Edit</button>

        </section>
    )
}