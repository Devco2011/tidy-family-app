import React, { useContext, useEffect } from "react"
import { ChoreContext } from "./ChoreProvider"
import { CompletedChoreCard } from "./CompletedChoreCard"
import { useHistory } from "react-router-dom"

export const CompletedChoreList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const history = useHistory()

    useEffect(() => {
        getChores()
    }, [])
    return (
        <>
            <h2>Completed Chores</h2>

            <div className="chores">
                {chores.map(chore => {
                    if (chore?.familyId === parseInt(localStorage.getItem("family_id")) && chore?.completed === "true")
                        return <CompletedChoreCard key={chore.id} chore={chore} />
                })
                }
            </div>
        </>
    )


}