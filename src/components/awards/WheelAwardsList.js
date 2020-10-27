import React, { useContext, useEffect } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { WheelAwardCard } from "./WheelAwardsCard"
import { useHistory } from "react-router-dom"

export const WheelAwardsList = () => {
    const { wheelAwards, getWheelAwards } = useContext(WheelAwardContext)
    const history = useHistory()

    useEffect(() => {
        getWheelAwards()
    }, [])
    return (
        <>


            <div className="WheelAwards">
                {wheelAwards.map(wheelAward => {
                    if (wheelAward?.familyId === parseInt(localStorage.getItem("family_id")))
                        return <WheelAwardCard key={wheelAward.id} wheelAward={wheelAward} />
                })
                }
            </div>
        </>
    )


}