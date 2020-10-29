import React, { useState, createContext } from "react"

export const MainAwardContext = createContext()

export const MainAwardsProvider = (props) => {
    const [mainAwards, setMainAwards] = useState([])

    const getMainAwards = () => {
        return fetch("http://localhost:8088/mainAwards")
            .then(res => res.json())
            .then(setMainAwards)
    }
    const addMainAwards = mainAwardsObj => {
        return fetch("http://localhost:8088/mainAwards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mainAwardsObj)
        })
            .then(getMainAwards)
    }
    const getMainAwardById = (id) => {
        return fetch(`http://localhost:8088/mainAwards/${id}`)
            .then(res => res.json())
    }

    const deleteMainAward = mainAwardId => {
        return fetch(`http://localhost:8088/mainAwards/${mainAwardId}`, {
            method: "DELETE"
        })
            .then(getMainAwards)
    }

    const updateMainAward = mainAward => {
        return fetch(`http://localhost:8088/mainAwards/${mainAward.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mainAward)
        })
            .then(getMainAwards)
    }

    return (
        <MainAwardContext.Provider value={{
            mainAwards, getMainAwards, addMainAwards, getMainAwardById, updateMainAward, deleteMainAward
        }}>
            {props.children}
        </MainAwardContext.Provider>
    )
}