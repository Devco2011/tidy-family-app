import React, { useContext, useEffect, useState } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { useParams, useHistory, Link } from "react-router-dom"
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,
} from 'reactstrap';

export const WheelAwardsDetail = () => {
    const { getWheelAwardById } = useContext(WheelAwardContext)

    const [wheelAward, setWheelAward] = useState({})



    const { wheelAwardsId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getWheelAwardById(wheelAwardsId)
            .then((response) => {
                setWheelAward(response)
            })
    }, [])

    return (

        <Container>
            <Card>
                <CardHeader tag="h3">{wheelAward.name}</CardHeader>
                <CardBody>
                    <CardTitle>Description:</CardTitle>
                    <CardText>{wheelAward.description}</CardText>
                    <Button onClick={event => {
                        event.preventDefault()
                    }}><Link to={`/wheelAwards/edit/${wheelAward.id}`}>
                            Edit</Link></Button>
                </CardBody>
                <CardFooter className="text-muted"></CardFooter>
            </Card>
        </Container>


    )
}