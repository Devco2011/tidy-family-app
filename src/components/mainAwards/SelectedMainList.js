import React, { useContext, useEffect } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { MainAwardCard } from "./MainAwardCard"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';

export const SelectedMainList = () => {
    const { mainAwards, getMainAwards } = useContext(MainAwardContext)
    const history = useHistory()
    let pointsNeeded
    useEffect(() => {
        getMainAwards()
    }, [])
    return (
        <>


            <div className="mainAwards" align="center">
                <h4>This week's Goal:</h4>
                {mainAwards.map(mainAward => {
                    if (mainAward?.familyId === parseInt(localStorage.getItem("family_id")) && mainAward.inUse === true)
                        return (
                            <div className="selected_main">
                                <h3 align="center" color="#ff0000">{mainAward.name}</h3>
                                <h4>({mainAward.pointsValue} Points)</h4>
                                <p>{mainAward.description}</p>

                                < h4 > Points needed: {pointsNeeded = +mainAward.pointsValue - +(sessionStorage.getItem("fam_points"))}</h4>

                            </div>)
                })
                }
            </div>
        </>
    )


}