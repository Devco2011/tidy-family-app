import React, { useContext, useEffect } from "react"
import { WheelAwardContext } from "./WheelAwardsProvider"
import { WheelAwardsDetail } from "./WheelAwardsDetail"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';

export const WheelAwardsList = () => {
    const { wheelAwards, getWheelAwards } = useContext(WheelAwardContext)
    const history = useHistory()

    useEffect(() => {
        getWheelAwards()
    }, [])
    return (
        <>


            <div className="wheel_awards">
                <h4>Wheel Awards</h4><Button onClick={() => history.push("/wheelAwards/create")}>
                    Add a Wheel Award</Button>
                {wheelAwards.map(wheelAward => {
                    if (wheelAward?.familyId === parseInt(localStorage.getItem("family_id")))
                        return <WheelAwardsDetail key={wheelAward.id} wheelAward={wheelAward} />

                })
                }
            </div>
        </>
    )


}