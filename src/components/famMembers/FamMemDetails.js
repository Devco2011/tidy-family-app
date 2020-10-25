import React, { useContext, useEffect, useState } from "react"
import { FamMemberContext } from "./FamMemProvider"
import { AllChoresList } from "../chores/AllChoresList"
import { ChoreProvider } from "../chores/ChoreProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row
} from 'reactstrap';

export const FamMemberDetail = () => {
    const { getFamMemberById } = useContext(FamMemberContext)

    const [famMember, setFamMember] = useState({})
    //const [location, setLocation] = useState({})


    const { famMemberId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", famMemberId)
        getFamMemberById(famMemberId)
            .then((response) => {
                setFamMember(response)
            })
    }, [])
    if (famMember.admin === true) {
        return (
            <>
                <Container>
                    <Card>
                        <CardHeader><img src={famMember.profilePic?.src} alt="Picture" /> {famMember.name}</CardHeader>
                        <CardBody>
                            <CardTitle>Current Points: {famMember.points}</CardTitle>
                            <Button onClick={() => { history.push("/chores/available") }}>Available Chores</Button>
                            <Row><Button onClick={() => { history.push("/chores/completed") }}>Completed Chores</Button></Row>
                        </CardBody>

                    </Card>
                </Container>
                <Container>
                    <ChoreProvider>
                        <AllChoresList />
                    </ChoreProvider>
                </Container>

            </>

        )
    }
    else {
        return (<Container>
            <Card>
                <CardHeader><img src={famMember.profilePic?.src} alt="Picture" /> {famMember.name}</CardHeader>
                <CardBody>
                    <CardTitle>Current Points: {famMember.points}</CardTitle>
                    <Button onClick={() => { history.push("/chores/available") }}>Available Chores</Button>
                    <Row><Button onClick={() => { history.push("/chores/completed") }}>Completed Chores</Button></Row>
                </CardBody>

            </Card>
        </Container>)
    }
}