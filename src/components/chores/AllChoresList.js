import React, { useContext, useEffect } from "react"
import { ChoreContext } from "./ChoreProvider"
import { ChoreCard } from "./ChoreCard"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';

export const AllChoresList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const history = useHistory()

    useEffect(() => {
        getChores()
    }, [])
    return (
        <>
            <h2>Manage All Chores</h2>

            <Button onClick={() => history.push("/chores/create")}>
                Add a Chore</Button>

            <div className="chores">
                {chores.map(chore => {
                    if (chore?.familyId === parseInt(localStorage.getItem("family_id")))
                        return <ChoreCard key={chore.id} chore={chore} />
                })
                }
            </div>
        </>
    )


}