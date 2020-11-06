import React from "react"
import { Link } from "react-router-dom";
import { Container, Button } from 'reactstrap';


export const SpinButton = () => {


    if (parseInt(sessionStorage.getItem("fam_member_points")) < 50) {
        (parseInt(sessionStorage.setItem("has_spun", false)))
        return (

            < Container align="center" >
                <h5>You need at least <strong>100</strong> points to get a spin on the Wheel of Prizes!</h5>
            </Container >
        )
    }
    if (sessionStorage.getItem("has_spun") === "true") {

        return (
            <Container align="center">
                <h5>You already had a spin on the Wheel of Prizes this week.</h5>
                <h5> Keep earning points for the family award!</h5>
            </Container>
        )
    } else {
        return (
            <Container className="spinWin" align="center">
                <h4 className="spinWinHeading">Nice work!</h4>
                <h5>You have earned a spin on the Wheel of Prizes!</h5>
                <div className="spinWinButton">
                    <Button color="info" onClick={event => {

                        (parseInt(sessionStorage.setItem("has_spun", true)))
                    }}><Link to={`/spin-the-wheel`}>
                            Click here to claim your spin</Link></Button>
                </div>

            </Container>
        )
    }

};