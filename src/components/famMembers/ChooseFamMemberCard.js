import React from "react"
import { Link } from "react-router-dom"

export const ChooseFamMemberCard = ({ famMember }) => (

    <section className="famMember">
        <h3 className="famMember__name">{famMember.name}</h3>
        <h3 className="famMember__points">Current Points: {famMember.points}</h3>


    </section>
)