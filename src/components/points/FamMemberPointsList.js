import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { FamMemberContext } from "../famMembers/FamMemProvider"
import { useHistory } from "react-router-dom"

export const FamMemberPointsList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()
    let familyMembers = [];
    let points = [];
    const intitialValue = 0;

    useEffect(() => {
        getChores()
        getFamMembers()

    }, [])


    const getFamMemberChores = (familyMemberId) => {

        return familyMembers = chores.filter(chore => chore.familyMemberId === familyMemberId)

    }



    const getFamMemberPoints = () => {

        return points = familyMembers.map((familyMember) => familyMember.pointsValue)

    }


    const reducer = (accumulator, item) => {
        return accumulator + item;

    }
    const totalPoints = () => points.reduce(reducer, intitialValue)


    return (
        <>
            <div className="famMembers">
                {famMembers.map(famMember => {
                    if (famMember?.familyId === parseInt(localStorage.getItem("family_id"))) {

                        getFamMemberChores(famMember.id)
                        console.log(familyMembers)
                        getFamMemberPoints()
                        console.log(points)
                        return <h2>Current Points: {totalPoints()}</h2>
                    }
                })
                }
            </div>
            <h2>Current Points: {totalPoints}</h2>


        </>
    )


}