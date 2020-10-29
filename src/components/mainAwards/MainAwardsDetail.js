import React, { useContext, useEffect, useState } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
} from 'reactstrap';

export const MainAwardsDetail = () => {
    const { deleteMainAward, getMainAwardById } = useContext(MainAwardContext)

    const [mainAward, setMainAward] = useState({})


    // mainAwardsId comes from the route in application views
    const { mainAwardsId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", mainAwardsId)
        getMainAwardById(mainAwardsId)
            .then((response) => {
                setMainAward(response)
            })
    }, [])

    return (

        <Container>
            <Card>
                <CardHeader tag="h3">{mainAward.name}</CardHeader>
                <CardBody>
                    <CardTitle>Description:</CardTitle>
                    <CardText>{mainAward.description}</CardText>
                    <Button onClick={event => {
                        event.preventDefault()
                    }}><Link to={`/mainAwards/edit/${mainAward.id}`}>
                            Edit</Link></Button>
                    <Button onClick={
                        () => {
                            deleteMainAward(mainAward.id)
                                .then(() => {
                                    history.push("/awards/allAwards")
                                })
                        }}>Delete Award</Button>
                </CardBody>
                <CardFooter className="text-muted">Points Value: {mainAward.pointsValue}</CardFooter>
            </Card>
        </Container>


    )
}