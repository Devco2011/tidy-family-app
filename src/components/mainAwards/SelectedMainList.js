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
            <h4 align="center">This week's Family Goal:</h4>

            <div className="selectedMainAwards" align="center">

                {mainAwards.map(mainAward => {
                    if (mainAward?.familyId === parseInt(localStorage.getItem("family_id")) && mainAward.inUse === true)
                        return (
                            <section className="selected_main">
                                <h3 align="center" color="#ff0000">{mainAward.name}</h3>
                                <p>({mainAward.pointsValue} Points)</p>

                                <div className="points_needed">
                                    < h2 > {pointsNeeded = +mainAward.pointsValue - +(sessionStorage.getItem("fam_points"))}</h2>
                                    <h5>Points to go!!</h5>
                                </div>
                            </section>)
                })
                }
            </div>
        </>
    )


}