import React, { useContext, useState, useEffect } from "react"
import { ChoreContext } from "./ChoreProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./Chores.css"

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


    return (

        <div className="completedConfirm mt-5 mb-5">

            <h3>Just confirming... Did you {chore.name}?</h3>

            <p><strong>Did you follow these instructions?</strong></p>
            <p>{chore.instructions}</p>
            <h4>Points Value: {chore.pointsValue}</h4>
            <Button color="warning mt-2 mr-3 mb-3" className="completedChore"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    constructChoreObject()

                }}>
                Yeah, baby!</Button>
            <Button color="warning mt-2 mr-3 mb-3" onClick={() => history.goBack()}>
                Nope!
      </Button>



        </div>

    );
}
