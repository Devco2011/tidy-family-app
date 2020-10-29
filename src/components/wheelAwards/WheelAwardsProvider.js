import React, { useState, createContext } from "react"

export const WheelAwardContext = createContext()

export const WheelAwardsProvider = (props) => {
    const [wheelAwards, setWheelAwards] = useState([])

    const getWheelAwards = () => {
        return fetch("http://localhost:8088/wheelAwards")
            .then(res => res.json())
            .then(setWheelAwards)
    }
    const addWheelAwards = wheelAwardsObj => {
        return fetch("http://localhost:8088/wheelAwards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wheelAwardsObj)
        })
            .then(getWheelAwards)
    }
    const getWheelAwardById = (id) => {
        return fetch(`http://localhost:8088/wheelAwards/${id}`)
            .then(res => res.json())
    }

    const updateWheelAward = wheelAward => {
        return fetch(`http://localhost:8088/wheelAwards/${wheelAward.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wheelAward)
        })
            .then(getWheelAwards)
    }

    return (
        <WheelAwardContext.Provider value={{
            wheelAwards, getWheelAwards, addWheelAwards, getWheelAwardById, updateWheelAward
        }}>
            {props.children}
        </WheelAwardContext.Provider>
    )
}