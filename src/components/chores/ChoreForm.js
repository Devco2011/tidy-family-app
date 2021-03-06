import React, { useContext, useState, useEffect, useRef } from "react"
import { ChoreContext } from "./ChoreProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

export const ChoreForm = (props) => {
    const { addChore, getChoreById, updateChore, deleteChore } = useContext(ChoreContext)

    const choreName = useRef()

    //for edit, hold on to state of award in this view
    const [chore, setChores] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { choreId } = useParams();

    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {

        const newChore = { ...chore }
        //mainAward is an object with properties. 
        //set the property to the new value
        newChore[event.target.name] = event.target.value
        //update state
        setChores(newChore)
    }

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
        if (choreName.current.value === "") {
            window.alert("Please enter an award name!")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (choreId) {
                //PUT - update
                updateChore({
                    id: chore.id,
                    name: chore.name,
                    instructions: chore.instructions,
                    pointsValue: parseInt(chore.pointsValue),
                    familyId: parseInt(localStorage.getItem("family_id")),
                    familyMemberId: chore.familyMemberId,
                    completed: chore.completed,
                    date: chore.date
                })
                    .then(() => history.push("/chores/allChores"))
            } else {
                //POST - add
                addChore({
                    name: chore.name,
                    pointsValue: parseInt(chore.pointsValue),
                    instructions: chore.instructions,
                    familyId: parseInt(localStorage.getItem("family_id")),
                    familyMemberId: "",
                    completed: false,
                    date: ""
                })
                    .then(() => history.push("/chores/allChores"))
            }
        }
    }

    return (
        <form className="choreForm">
            <h2 className="choreForm__title">{choreId ? `Edit ${chore.name}` : "New chore"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="choreName">What do you want to call this chore?</label>
                    <input ref={choreName} type="text" id="choreName" name="name" required autoFocus className="form-control"
                        placeholder="Chore name"
                        onChange={handleControlledInputChange}
                        defaultValue={chore.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="choreInstructions">What does this chore entail? </label>
                    <input type="text" id="choreInstructions" name="instructions" required autoFocus className="form-control"
                        placeholder="Instructions"
                        onChange={handleControlledInputChange}
                        defaultValue={chore.instructions} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="chorePointsValue">How many points is it worth? </label>
                    <input type="text" id="chorePointsValue" name="pointsValue" required autoFocus className="form-control"
                        placeholder="Points Value"
                        onChange={handleControlledInputChange}
                        defaultValue={chore.pointsValue} />
                </div>
            </fieldset>


            <Button color="warning"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    constructChoreObject()
                }}>
                {choreId ? <>Save Chore</> : <>Add Chore</>}</Button>
            {choreId ?
                <Button color="warning float-right" onClick={
                    () => {
                        deleteChore(chore.id)
                            .then(() => {
                                history.push("/chores/allChores")
                            })
                    }}>Delete this Chore</Button>
                : <></>}


        </form>
    )
}