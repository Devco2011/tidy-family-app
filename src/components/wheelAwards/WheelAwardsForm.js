import React, { useContext, useState, useEffect, useRef } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { useHistory, useParams } from 'react-router-dom';

export const WheelAwardsForm = (props) => {
    const { addWheelAwards, getWheelAwardById, updateWheelAward } = useContext(WheelAwardContext)

    const wheelAwardName = useRef()

    //for edit, hold on to state of award in this view
    const [wheelAward, setWheelAwards] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { wheelAwardsId } = useParams();

    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state. Using spread operater here 
        const newWheelAward = { ...wheelAward }
        //mainAward is an object with properties. 
        //set the property to the new value
        newWheelAward[event.target.name] = event.target.value
        //update state
        setWheelAwards(newWheelAward)
    }

    // If mainAwardId is in the URL, getMainAwardById
    useEffect(() => {
        if (wheelAwardsId) {
            getWheelAwardById(wheelAwardsId)
                .then(wheelAward => {
                    setWheelAwards(wheelAward)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructWheelAwardObject = () => {
        if (wheelAwardName.current.value === "") {
            window.alert("Please enter an award name!")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (wheelAwardsId) {
                //PUT - update
                updateWheelAward({
                    id: wheelAward.id,
                    name: wheelAward.name,
                    description: wheelAward.description,
                    familyId: parseInt(localStorage.getItem("family_id"))
                })
                    .then(() => history.push("/awards/allAwards"))
            } else {
                //POST - add
                addWheelAwards({
                    name: wheelAward.name,
                    description: wheelAward.description,
                    familyId: parseInt(localStorage.getItem("family_id"))
                })
                    .then(() => history.push("/awards/allAwards"))
            }
        }
    }

    return (
        <form className="wheelAwardsForm">
            <h2 className="wheelAwardsForm__title">{wheelAwardsId ? `Edit ${wheelAward.name}` : "New Wheel Award"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="wheelAwardName">Award name: </label>
                    <input ref={wheelAwardName} type="text" id="wheelAwardName" name="name" required autoFocus className="form-control"
                        placeholder="Award name"
                        onChange={handleControlledInputChange}
                        defaultValue={wheelAward.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="wheelAwardDescription">Description: </label>
                    <input type="text" id="wheelAwardDescription" name="description" required autoFocus className="form-control"
                        placeholder="Description"
                        onChange={handleControlledInputChange}
                        defaultValue={wheelAward.description} />
                </div>
            </fieldset>


            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructWheelAwardObject()
                }}>
                {wheelAwardsId ? <>Save Award</> : <>Add Award</>}</button>
        </form>
    )
}