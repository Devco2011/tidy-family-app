import React, { useContext, useEffect } from "react"
import { ChoreContext } from "./ChoreProvider"
import { CompletedChoreCard } from "./CompletedChoreCard"
import { useHistory } from "react-router-dom"


export const FamMemCompletedList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const history = useHistory()

    useEffect(() => {
        getChores()
    }, [])
    return (
        <>
            <h2>Completed Chores</h2>


            <div className="completedChores">
                {chores.map(chore => {
                    if (chore?.familyId === parseInt(localStorage.getItem("family_id")) && chore?.familyMemberId === parseInt(sessionStorage.getItem("family_memberId")))
                        return <CompletedChoreCard key={chore.id} chore={chore} />
                })
                }
            </div>



        </>
    )


}