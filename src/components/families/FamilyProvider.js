import React, { useState, createContext } from "react"

export const FamiliesContext = createContext()

export const FamiliesProvider = (props) => {
    const [families, setFamilies] = useState([])

    const getFamilies = () => {
        return fetch(`http://localhost:8088/families`)
            .then(res => res.json())
            .then(setFamilies)
    }
    const addFamilies = familyObj => {
        return fetch("http://localhost:8088/families", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(familyObj)
        })
            .then(getFamilies)
    }

    const getFamiliesById = (id) => {
        return fetch(`http://localhost:8088/families/${id}`)
            .then(res => res.json())
    }
    const updateFamilies = family => {
        return fetch(`http://localhost:8088/families/${family.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(family)
        })
            .then(getFamilies)
    }

    return (
        <FamiliesContext.Provider value={{
            families, getFamilies, addFamilies, getFamiliesById, updateFamilies
        }}>
            {props.children}
        </FamiliesContext.Provider>
    )
}