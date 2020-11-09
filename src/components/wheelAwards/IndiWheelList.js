import React, { useContext, useEffect } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { useHistory } from "react-router-dom"

export const IndiWheelList = () => {
    const { wheelAwards, getWheelAwards } = useContext(WheelAwardContext)
    const history = useHistory()

    useEffect(() => {
        getWheelAwards()
    }, [])
    return (
        <>


            <div className="WheelAwards">
                <h4>Keep earning those points and you can get:</h4>
                {wheelAwards.map(wheelAward => {
                    if (wheelAward?.familyId === parseInt(localStorage.getItem("family_id")))
                        return (
                            <div className="selected_main">
                                <h4>{wheelAward.name}</h4>
                                <p>{wheelAward.description}</p>
                                <h5>You need a total of {wheelAward.pointsReq} points to get this award!</h5>
                            </div>)

                })
                }
            </div>
        </>
    )


}