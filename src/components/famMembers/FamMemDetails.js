import React, { useContext, useEffect, useState } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { ChoreContext } from "../chores/ChoreProvider"
import { useParams, useHistory } from "react-router-dom"
import { CountDown } from "../countDown/CountDown"
import { SpinButton } from "../wheelAwards/SpinButton"
import {
    Button, CardHeader, CardBody,
    CardTitle, Container, Row, Col
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
                <div className="memberDetailAdmin">
                    <Row>
                        <div className="individualCard">
                            <img width="30%" hieght="35%" src={famMember.profilePic?.src} alt="Picture" />
                            <CardBody align="center">
                                <CardTitle><h4>{famMember.name}</h4></CardTitle>
                                <CardTitle>Current Points: {totalPoints()}</CardTitle>
                                <Button color="warning" className="mb-2 mr-2" onClick={() => { history.push("/chores/available") }}>Available Chores</Button>{''}
                                <Button color="warning" className="mb-2 ml-2" onClick={() => { history.push("/chores/memberCompleted") }}>Completed Chores</Button>
                            </CardBody>

                        </div>
                    </Row>
                    <Row>
                        <div>
                            <CardHeader><h3 align="center">Admin</h3></CardHeader>
                            <CardBody>
                                <Button color="warning" className="mb-2 mr-2" onClick={() => { history.push("/chores/allChores") }}>Manage All Chores</Button>
                                <Button color="warning" className="mb-2 mr-2" onClick={() => { history.push("/awards/allAwards") }}>Manage All Awards</Button>
                            </CardBody>
                            <CountDown timeTillDate="01 6 2021, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
                        </div>

                    </Row>
                </div>


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
                        <div className="individualCard">
                            <img width="30%" hieght="35%" src={famMember.profilePic?.src} alt="Picture" />
                            <CardBody align="center">
                                <CardTitle><h4>{famMember.name}</h4></CardTitle>
                                <CardTitle>Current Points: {totalPoints()}</CardTitle>
                                <Button color="warning" className="mb-2 mr-2" onClick={() => { history.push("/chores/available") }}>Available Chores</Button>{''}
                                <Button color="warning" className="mb-2 ml-2" onClick={() => { history.push("/chores/memberCompleted") }}>Completed Chores</Button>
                            </CardBody>

                        </div>
                    </Col>

                    <Col xs="6 pt-5">
                        <SpinButton />
                        <CountDown timeTillDate="01 6 2021, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
                    </Col>
                </Row>
            </Container>)
    }
}