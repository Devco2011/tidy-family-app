import React, { useContext, useState, useEffect, useRef } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const MainAwardsForm = (props) => {
    const { addMainAwards, getMainAwardById, updateMainAward, deleteMainAward } = useContext(MainAwardContext)
    const mainAwardName = useRef()
    const [mainAward, setMainAwards] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const { mainAwardsId } = useParams();
    const history = useHistory();


    const handleControlledInputChange = (event) => {

        const newMainAward = { ...mainAward }

        newMainAward[event.target.name] = event.target.value
        setMainAwards(newMainAward)
    }

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
            setIsLoading(true);
            if (mainAwardsId) {
                updateMainAward({
                    id: mainAward.id,
                    name: mainAward.name,
                    description: mainAward.description,
                    pointsValue: parseInt(mainAward.pointsValue),
                    familyId: parseInt(localStorage.getItem("family_id"))
                })
                    .then(() => history.push("/awards/allAwards"))
            } else {
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

            {mainAwardsId ?
                <Form className="awardForm mb-3"><FormGroup check>
                    <Label check>
                        <Input type="checkbox" onClick={event => {
                            sessionStorage.setItem("family_Award", mainAward.id)
                        }}></Input>{' '}
         Make this the family award for the week
        </Label>
                </FormGroup>
                </Form>
                : <></>}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mainAwardName">What do you want to call this award?</label>
                    <input ref={mainAwardName} type="text" id="mainAwardName" name="name" required autoFocus className="form-control"
                        placeholder="Award name"
                        onChange={handleControlledInputChange}
                        defaultValue={mainAward.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mainAwardDescription">What will this award entail? </label>
                    <input type="text" id="mainAwardDescription" name="description" required autoFocus className="form-control"
                        placeholder="Description"
                        onChange={handleControlledInputChange}
                        defaultValue={mainAward.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mainAwardPointsValue">How many points does the family need in order to recieve this award? </label>
                    <input type="text" id="mainAwardPointsValue" name="pointsValue" required autoFocus className="form-control"
                        placeholder="Points Value"
                        onChange={handleControlledInputChange}
                        defaultValue={mainAward.pointsValue} />
                </div>
            </fieldset>


            <Button color="warning mb-5"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    constructMainAwardObject()
                }}>
                {mainAwardsId ? <>Save Award</> : <>Add Award</>}</Button>
            {mainAwardsId ?
                <Button color="warning float-right mb-5" onClick={
                    () => {
                        deleteMainAward(mainAward.id)
                            .then(() => {
                                history.push("/awards/allAwards")
                            })
                    }}>Delete Award</Button>
                : <></>}
        </form>
    )
}