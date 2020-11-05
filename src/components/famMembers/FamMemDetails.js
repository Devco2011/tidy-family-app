import React, { useContext, useEffect, useState } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { ChoreContext } from "../chores/ChoreProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import { Wheel } from "../wheel/WheelComponent"
import { WheelAwardsProvider } from "../wheelAwards/WheelAwardsProvider";
import { SpinButton } from "../wheelAwards/SpinButton"
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col
} from 'reactstrap';

export const FamMemberDetail = () => {
    const { getFamMemberById } = useContext(FamMemberContext)
    const { chores, getChores } = useContext(ChoreContext)
    let familyMemberChores = [];
    let points = [];
    const intitialValue = 0;


    const [famMember, setFamMember] = useState({})



    const { famMemberId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", famMemberId)
        getFamMemberById(famMemberId)
            .then((response) => {
                setFamMember(response)
            })

        getChores()


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
    if (famMember.admin === true) {


        getFamMemberChores(famMember.id)
        getFamMemberPoints()
        sessionStorage.setItem("fam_member_points", `${totalPoints()}`)
        return (
            <>
                <Container>
                    <Card>
                        <CardHeader><img src={famMember.profilePic?.src} alt="Picture" /> {famMember.name}</CardHeader>
                        <CardBody>
                            <CardTitle>Current Points: {totalPoints()}</CardTitle>
                            <Button onClick={() => { history.push("/chores/available") }}>Available Chores</Button>
                            <Row><Button onClick={() => { history.push("/chores/completed") }}>Completed Chores</Button></Row>
                        </CardBody>

                    </Card>
                </Container>

                <Container>
                    <Card>
                        <CardHeader><h3>Admin</h3></CardHeader>
                        <CardBody>
                            <Row><Button onClick={() => { history.push("/chores/allChores") }}>Manage All Chores</Button></Row>
                            <Row><Button onClick={() => { history.push("/awards/allAwards") }}>Manage All Awards</Button></Row>
                        </CardBody>

                    </Card>
                </Container>


            </>

        )
    }
    else {

        getFamMemberChores(famMember.id)
        getFamMemberPoints()
        sessionStorage.setItem("fam_member_points", `${totalPoints()}`)


        return (
            <Container>
                <Row>
                    <Col xs="6 pt-5">
                        <Card>
                            <CardHeader><img src={famMember.profilePic?.src} alt="Picture" /> {famMember.name}</CardHeader>
                            <CardBody>
                                <CardTitle>Current Points: {totalPoints()}</CardTitle>
                                <Button onClick={() => { history.push("/chores/available") }}>Available Chores</Button>
                                <Row><Button onClick={() => { history.push("/chores/completed") }}>Completed Chores</Button></Row>
                            </CardBody>

                        </Card>
                    </Col>

                    <Col xs="6 pt-5">
                        <SpinButton />
                    </Col>
                </Row>
            </Container>)
    }
}