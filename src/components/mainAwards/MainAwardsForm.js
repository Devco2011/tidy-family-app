import React, { useContext, useState, useEffect, useRef } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

export const MainAwardsForm = (props) => {
    const { addMainAwards, getMainAwardById, updateMainAward, deleteMainAward } = useContext(MainAwardContext)

    const mainAwardName = useRef()

    //for edit, hold on to state of award in this view
    const [mainAward, setMainAwards] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { mainAwardsId } = useParams();

    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state. Using spread operater here 
        const newMainAward = { ...mainAward }
        //mainAward is an object with properties. 
        //set the property to the new value
        newMainAward[event.target.name] = event.target.value
        //update state
        setMainAwards(newMainAward)
    }

    // If mainAwardId is in the URL, getMainAwardById
    useEffect(() => {
        if (mainAwardsId) {
            getMainAwardById(mainAwardsId)
                .then(mainAward => {
                    setMainAwards(mainAward)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructMainAwardObject = () => {
        if (mainAwardName.current.value === "") {
            window.alert("Please enter an award name!")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (mainAwardsId) {
                //PUT - update
                updateMainAward({
                    id: mainAward.id,
                    name: mainAward.name,
                    description: mainAward.description,
                    pointsValue: parseInt(mainAward.pointsValue),
                    familyId: parseInt(localStorage.getItem("family_id"))
                })
                    .then(() => history.push("/awards/allAwards"))
            } else {
                //POST - add
                addMainAwards({
                    name: mainAward.name,
                    pointsValue: parseInt(mainAward.pointsValue),
                    description: mainAward.description,
                    familyId: parseInt(localStorage.getItem("family_id"))
                })
                    .then(() => history.push("/awards/allAwards"))
            }
        }
    }

    return (
        <form className="mainAwardsForm">
            <h2 className="mainAwardsForm__title">{mainAwardsId ? `Edit ${mainAward.name}` : "New Main Award"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mainAwardName">Award name: </label>
                    <input ref={mainAwardName} type="text" id="mainAwardName" name="name" required autoFocus className="form-control"
                        placeholder="Award name"
                        onChange={handleControlledInputChange}
                        defaultValue={mainAward.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mainAwardDescription">Description: </label>
                    <input type="text" id="mainAwardDescription" name="description" required autoFocus className="form-control"
                        placeholder="Description"
                        onChange={handleControlledInputChange}
                        defaultValue={mainAward.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mainAwardPointsValue">Points Value: </label>
                    <input type="text" id="mainAwardPointsValue" name="pointsValue" required autoFocus className="form-control"
                        placeholder="Points Value"
                        onChange={handleControlledInputChange}
                        defaultValue={mainAward.pointsValue} />
                </div>
            </fieldset>


            <Button color="warning"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructMainAwardObject()
                }}>
                {mainAwardsId ? <>Save Award</> : <>Add Award</>}</Button>

            <Button color="warning float-right" onClick={
                () => {
                    deleteMainAward(mainAward.id)
                        .then(() => {
                            history.push("/awards/allAwards")
                        })
                }}>Delete Award</Button>
        </form>
    )
}