import React, { useContext, useEffect } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { MainAwardCard } from "./MainAwardCard"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';

export const SelectedMainList = () => {
    const { mainAwards, getMainAwards } = useContext(MainAwardContext)
    const history = useHistory()

    useEffect(() => {
        getMainAwards()
    }, [])
    return (
        <>


            <div className="mainAwards">
                <h4>This week's BIG award:</h4>
                {mainAwards.map(mainAward => {
                    if (mainAward?.familyId === parseInt(localStorage.getItem("family_id")) && mainAward.inUse === true)
                        return (
                            <div className="selected_main">
                                <h3>{mainAward.name}</h3>
                                <p>{mainAward.description}</p>
                                <h2>The family needs a total of {mainAward.pointsValue} points to get this award!</h2>
                            </div>)
                })
                }
            </div>
        </>
    )


}