import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { FamMemberContext } from "../famMembers/FamMemProvider"
import { useHistory } from "react-router-dom"
import { Container } from 'reactstrap';

export const PointsCounter = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()
    let familyChores = [];
    let points = [];
    const intitialValue = 0;

    useEffect(() => {
        getChores()
    }, [])

    // Filter all chores and get the ones that have been completed, return a new array called familyMemberChores
    const getFamChores = () => {

        return familyChores = chores.filter(chore => chore.completed === true)

    }

    // Map over familyChores and get the points value for each chore
    const getFamPoints = () => {

        return points = familyChores.map((familyChore) => familyChore.pointsValue)

    }

    // Add the points values of each chore together
    const reducer = (accumulator, item) => {
        return accumulator + item;

    }
    const totalPoints = () => points.reduce(reducer, intitialValue)

    getFamPoints()
    return (
        <>
            <Container>
                <div className="chores">
                    {/* Map over all chores and get those that match the family Id in local storage */}
                    {chores.map(chore => {
                        if (chore?.familyId === parseInt(localStorage.getItem("family_id")))
                            getFamChores()
                        console.log(familyChores)
                        getFamPoints()
                        console.log(points)
                        return <h2 key={chore.id}> Family Points: {totalPoints()}</h2>
                    }
                    )
                    }
                </div>

            </Container>

        </>
    )


}