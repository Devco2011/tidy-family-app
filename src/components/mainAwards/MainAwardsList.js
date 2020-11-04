import React, { useContext, useEffect } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { MainAwardsDetail } from "./MainAwardsDetail"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';

export const MainAwardsList = () => {
    const { mainAwards, getMainAwards } = useContext(MainAwardContext)
    const history = useHistory()

    useEffect(() => {
        getMainAwards()
    }, [])
    return (
        <>


            <div className="mainAwards">
                <h4>Main Awards</h4><Button onClick={() => history.push("/mainAwards/create")}>
                    Add a Main Award</Button>
                {mainAwards.map(mainAward => {
                    if (mainAward?.familyId === parseInt(localStorage.getItem("family_id")))
                        return <MainAwardsDetail key={mainAward.id} mainAward={mainAward} />
                })
                }
            </div>
        </>
    )


}