import React, { useState, createContext } from "react"

export const ChoreContext = createContext()

export const ChoreProvider = (props) => {
    const [chores, setChores] = useState([])

    const getChores = () => {
        return fetch(`http://localhost:8088/chores?_expand=familyMember`)
            .then(res => res.json())
            .then(setChores)
    }
    const addChore = choreObj => {
        return fetch("http://localhost:8088/chores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(choreObj)
        })
            .then(getChores)
    }

    const getChoreById = (id) => {
        return fetch(`http://localhost:8088/chores/${id}?_expand=familyMember`)
            .then(res => res.json())
    }
    const updateChore = chore => {
        return fetch(`http://localhost:8088/chores/${chore.id}?_expand=familyMember`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chore)
        })
            .then(getChores)
    }

    return (
        <ChoreContext.Provider value={{
            chores, getChores, addChore, getChoreById, updateChore
        }}>
            {props.children}
        </ChoreContext.Provider>
    )
}