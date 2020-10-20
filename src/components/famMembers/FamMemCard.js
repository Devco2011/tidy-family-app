import React from "react"
import { Link } from "react-router-dom"

export const FamMemberCard = ({ famMember }) => (
    <section className="famMember">
        <h3 className="famMember__name">{famMember.name}</h3>
        <Link to={`/famMembers/detail/${famMember.id}`}>
            <h4>Details</h4>
        </Link>
    </section>
)