import React, { useContext, useEffect } from "react"
import { ChoreContext } from "./ChoreProvider"
import { ChoreCard } from "./ChoreCard"
import { useHistory } from "react-router-dom"

export const AllChoresList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const history = useHistory()

    useEffect(() => {
        getChores()
    }, [])


    return (
        <>
            <h2>Current Points:</h2>

            <div className="chores">
                {chores.filter(familyMemberId => {
                    chore.familyMemberId === familyMemberId
                    return <PointsCard key={chore.id} chore={chore} />
                })
                }
            </div>
        </>
    )


}