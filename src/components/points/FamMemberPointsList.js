import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { CompletedChoreCard } from "../chores/CompletedChoreCard"
import { useHistory } from "react-router-dom"

export const FamMemberPointsList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const history = useHistory()
    let famMembers = [];
    let points = [];
    const intitialValue = 0;

    useEffect(() => {
        getChores()

    }, [])


    const getFamMemberChores = (familyMemberId) => {

        return famMembers = chores.filter(chore => chore.familyMemberId === familyMemberId)

    }
    getFamMemberChores(2)
    console.log(famMembers)

    const getFamMemberPoints = () => {

        return points = famMembers.map((famMember) => famMember.pointsValue)

    }
    console.log(getFamMemberPoints())

    const reducer = (accumulator, item) => {
        return accumulator + item;

    }
    const totalPoints = points.reduce(reducer, intitialValue)
    console.log(totalPoints)

    return (
        <>
            <h2>Completed Chores</h2>


        </>
    )


}