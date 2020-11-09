import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { FamMemberContext } from "../famMembers/FamMemProvider"
import { useHistory, Link } from "react-router-dom"
import { Container, Button } from 'reactstrap';

export const FamMemberList = () => {
    const { chores, getChores } = useContext(ChoreContext)
    const { famMembers, getFamMembers } = useContext(FamMemberContext)
    const history = useHistory()
    let familyMemberChores = [];
    let points = [];
    const intitialValue = 0;

    useEffect(() => {
        getChores()
        getFamMembers()

    }, [])

    // Filter all chores and get the ones that match the family member id, return a new array called familyMemberChores
    const getFamMemberChores = (familyMemberId) => {

        return familyMemberChores = chores.filter(chore => chore.familyMemberId === familyMemberId)

    }


    // Map over familyMemberChores and get the points value for each chore
    const getFamMemberPoints = () => {

        return points = familyMemberChores.map((familyMember) => familyMember.pointsValue)

    }

    // Add the points values of each chore together
    const reducer = (accumulator, item) => {
        return accumulator + item;

    }
    const totalPoints = () => points.reduce(reducer, intitialValue)


    return (
        <>
            <h4 align="center">Family Members</h4>
            <div className="FamListTop">



                {/* Map over all family members and get those that match the family Id in local storage */}
                {famMembers.map(famMember => {
                    if (famMember?.familyId === parseInt(localStorage.getItem("family_id"))) {

                        getFamMemberChores(famMember.id)
                        getFamMemberPoints()
                        console.log(points)
                        return <div className="famList" key={famMember.id}>





                            <img width="20%" hieght="25%" src={famMember.profilePic?.src} alt="Picture" />

                            <Link to={`/famMembers/detail/${famMember.id}`}><h4>{famMember.name}</h4></Link>
                            <p></p><h4>Current Points: {totalPoints()}</h4>

                        </div>
                    }
                })
                }

                <Button color="warning" onClick={() => { history.push("/famMembers/create") }}>
                    Add A Family Member
               </Button>
            </div>

        </>
    )


}