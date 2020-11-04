import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { useHistory } from "react-router-dom"
import { Container } from 'reactstrap';
import { FamiliesContext } from "../families/FamilyProvider";

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



    // getFamChores filters all chores and get the ones that have been completed, defined as newFamilyChores. 
    //Then return a new array called familyChores and add (push) all the newFamilyChores to familyChores via spread operater

    const getFamChores = (familyId) => {
        let newFamilyChores = chores.filter(chore => chore.familyId === familyId && chore.completed === true)
        console.log(newFamilyChores)
        return familyChores.push(...newFamilyChores)

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
                    {/* Using forEach here because it does not require a return like map does.  Gettiing chores that match the family Id in local storage */}
                    {families.forEach(family => {

                        if (family.id === parseInt(localStorage.getItem("family_id"))) {
                            getFamChores(family.id)

                            getFamPoints()
                            sessionStorage.setItem("fam_points", `${totalPoints()}`)

                        }

                    })
                    }
                    <h2>Current Family Points: {totalPoints()}</h2>
                </div>

            </Container>

        </>
    )


}