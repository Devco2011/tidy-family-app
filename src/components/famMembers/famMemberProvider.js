import React, { useState, createContext } from "react"

export const FamMemberContext = createContext()

export const FamMemProvider = (props) => {
    const [famMembers, setFamMembers] = useState([])

    const getFamMembers = () => {
        return fetch("http://localhost:8088/familyMembers")
            .then(res => res.json())
            .then(setFamMembers)
    }
    const addFamMember = famMemberObj => {
        return fetch("http://localhost:8088/familyMembers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(famMemberObj)
        })
            .then(getFamMembers)
    }
    const getFamMemberById = (id) => {
        return fetch(`http://localhost:8088/familyMembers/${id}?_expand=profilePic`)
            .then(res => res.json())
    }

    const updateFamMember = famMember => {
        return fetch(`http://localhost:8088/familyMembers/${famMember.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(famMember)
        })
            .then(getFamMembers)
    }

    return (
        <FamMemberContext.Provider value={{
            famMembers, getFamMembers, addFamMember, getFamMemberById, updateFamMember
        }}>
            {props.children}
        </FamMemberContext.Provider>
    )
}