import React, { useContext, useEffect } from "react"
import { ChoreContext } from "./ChoreProvider"
import { AvailableChoreCard } from "./AvailableChoreCard"
import { useHistory } from "react-router-dom"
import "./Chores.css"

export const AvailableChoreList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const history = useHistory()

    useEffect(() => {
        getChores()
    }, [])
    return (
        <>
            <h2>Available Chores</h2>

            <div className="chores">
                {chores.map(chore => {
                    if (chore?.familyId === parseInt(localStorage.getItem("family_id")) && chore?.completed === false)
                        return <AvailableChoreCard key={chore.id} chore={chore} />
                })
                }
            </div>
        </>
    )


}