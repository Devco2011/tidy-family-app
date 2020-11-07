import React, { useContext, useEffect } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { WheelAwardsDetail } from "./WheelAwardsDetail"
import { useHistory } from "react-router-dom"
import "./wheelAwards.css"
import { Button } from 'reactstrap';

export const WheelAwardsList = () => {
    const { wheelAwards, getWheelAwards } = useContext(WheelAwardContext)
    const history = useHistory()

    useEffect(() => {
        getWheelAwards()
    }, [])
    return (
        <>
            <div className="wheelAwardMainContainer mt-5">
                <h4>Wheel Awards</h4><Button color="warning" onClick={() => history.push("/wheelAwards/create")}>
                    Add a Wheel Award</Button>
                <div className="wheel_awards">
                    {wheelAwards.map(wheelAward => {
                        if (wheelAward?.familyId === parseInt(localStorage.getItem("family_id")))
                            return <WheelAwardsDetail key={wheelAward.id} wheelAward={wheelAward} />

                    })
                    }
                </div>
            </div>
        </>
    )


}