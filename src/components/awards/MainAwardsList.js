import React, { useContext, useEffect } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { MainAwardCard } from "./MainAwardCard"
import { useHistory } from "react-router-dom"

export const MainAwardsList = () => {
    const { mainAwards, getMainAwards } = useContext(MainAwardContext)
    const history = useHistory()

    useEffect(() => {
        getMainAwards()
    }, [])
    return (
        <>


            <div className="mainAwards">
                {mainAwards.map(mainAward => {
                    if (mainAward?.familyId === parseInt(localStorage.getItem("family_id")))
                        return <MainAwardCard key={mainAward.id} mainAward={mainAward} />
                })
                }
            </div>
        </>
    )


}