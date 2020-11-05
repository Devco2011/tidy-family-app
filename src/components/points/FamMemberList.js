import React, { useContext, useEffect } from "react"
import { ChoreContext } from "../chores/ChoreProvider"
import { FamMemberContext } from "../famMembers/FamMemProvider"
import { useHistory, Link } from "react-router-dom"
import { Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

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
            <Container>
                <h4>Family Members</h4>

                <div className="famMembers">
                    {/* Map over all family members and get those that match the family Id in local storage */}
                    {famMembers.map(famMember => {
                        if (famMember?.familyId === parseInt(localStorage.getItem("family_id"))) {

                            getFamMemberChores(famMember.id)
                            getFamMemberPoints()
                            console.log(points)
                            return <Container key={famMember.id}>

                                <ListGroup>
                                    <ListGroupItem>{famMember.name}</ListGroupItem>
                                    <ListGroupItem tag="button" action><Link to={`/famMembers/detail/${famMember.id}`}>

                                        <img src={famMember.profilePic.src} alt="Picture" />
                                    </Link></ListGroupItem>
                                    <ListGroupItem>Current Points: {totalPoints()}</ListGroupItem>
                                </ListGroup>
                            </Container>
                        }
                    })
                    }
                </div>
                <button onClick={() => { history.push("/famMembers/create") }}>
                    Add A Family Member
        </button>
            </Container>

        </>
    )


}