import React, { useContext, useState, useEffect, Component } from "react"
import { ChoreContext } from "./ChoreProvider"
import { useHistory, useParams } from 'react-router-dom';
import {
    Container, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

export const CompletedChoreModal = () => {


    const { getChoreById, updateChore } = useContext(ChoreContext)



    const [chore, setChores] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { choreId } = useParams();
    const history = useHistory();


    useEffect(() => {

        if (choreId) {
            getChoreById(choreId)
                .then(chore => {
                    setChores(chore)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructChoreObject = () => {
        if (choreId) {
            //PUT - update
            updateChore({
                id: chore.id,
                name: chore.name,
                instructions: chore.instructions,
                pointsValue: chore.pointsValue,
                familyId: chore.familyId,
                familyMemberId: parseInt(sessionStorage.getItem("family_memberId")),
                completed: true,
                date: new Date().toLocaleString(),

            })
                .then(() => history.push("/chores/available"))
        }


    }
    const Cancel = () => {
        history.push("/")
    }

    return (

        <Container>
            <Card>
                <CardHeader tag="h3">Just confirming... Did you {chore.name}?</CardHeader>
                <CardBody>
                    <CardTitle>Did you follow these instructions?</CardTitle>
                    <CardText>{chore.instructions}</CardText>
                    <Button className="completedChore"
                        disabled={isLoading}
                        onClick={event => {
                            event.preventDefault()
                            constructChoreObject()

                        }}>
                        Yeah, baby!</Button>
                    <Button type="button" onClick={() => history.goBack()}>
                        Nope!
      </Button>
                </CardBody>
                <CardFooter className="text-muted">Points Value: {chore.pointsValue}</CardFooter>
            </Card>

        </Container>
    );
}
