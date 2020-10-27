import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { FamiliesContext } from "../families/FamilyProvider"
import { useHistory } from "react-router-dom"
import { Container } from 'reactstrap';

export const PointsCounter = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const { families, getFamilies } = useContext(FamiliesContext)
    const history = useHistory()
    let familyChores = [];
    let points = [];
    const intitialValue = 0;

    useEffect(() => {
        getChores()
        getFamilies()
    }, [])

    // Filter all chores and get the ones that have been completed, return a new array called familyMemberChores
    const getFamChores = (familyId) => {

        return familyChores = chores.filter(chore => chore.familyId === familyId && chore.completed === true)

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


    return (
        <>
            <Container>
                <div className="chores">
                    {/* Map over all chores and get those that match the family Id in local storage */}
                    {families.map(family => {
                        if (family?.id === parseInt(localStorage.getItem("family_id")))
                            getFamChores(family.id)
                        console.log(familyChores)
                        getFamPoints()
                        console.log(points)
                        return <h2 key={family.id}> Family Points: {totalPoints()}</h2>
                    }
                    )
                    }
                </div>

            </Container>

        </>
    )


}