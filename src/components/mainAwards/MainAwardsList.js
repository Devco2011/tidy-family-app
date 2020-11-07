import React, { useContext, useEffect } from "react"
import { MainAwardContext } from "./MainAwardsProvider"
import { MainAwardsDetail } from "./MainAwardsDetail"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';
import "./mainAwards.css"

export const MainAwardsList = () => {
    const { mainAwards, getMainAwards } = useContext(MainAwardContext)
    const history = useHistory()

    useEffect(() => {
        getMainAwards()
    }, [])
    return (
        <>
            <div className="mainAwardMainContainer mt-5">
                <h4>Main Awards</h4><Button color="warning" onClick={() => history.push("/mainAwards/create")}>
                    Add a Main Award</Button>

                <div className="mainAwards">
                    {mainAwards.map(mainAward => {
                        if (mainAward?.familyId === parseInt(localStorage.getItem("family_id")))
                            return <MainAwardsDetail key={mainAward.id} mainAward={mainAward} />
                    })
                    }
                </div>
            </div>
        </>
    )


}