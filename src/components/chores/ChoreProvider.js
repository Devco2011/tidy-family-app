import React, { useState, createContext } from "react"

export const ChoreContext = createContext()

export const ChoreProvider = (props) => {
    const [chores, setChores] = useState([])

    const getChores = () => {
        return fetch(`http://localhost:8088/chores`)
            .then(res => res.json())
            .then(setLocations)
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
        return fetch(`http://localhost:8088/chores/${id}`)
            .then(res => res.json())
    }

    return (
        <ChoreContext.Provider value={{
            chores, getChores, addChore, getChoreById
        }}>
            {props.children}
        </ChoreContext.Provider>
    )
}