import React from "react";
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap'
import TidyFamily from '../components/images/TidyFamily.png'
import { useHistory } from 'react-router-dom';



export const Home = () => {
    const history = useHistory();

    return (
        <>
            <div className="homeMainContainer">


                <Container fluid className='bg-white'>
                    <div>
                        <img width="40%" src={TidyFamily} alt="Tidy Family" />
                    </div>

                    <div align="right" className="familyName">The {localStorage.family_name} Family Rocks!</div>

                    <Button className="float-right" shadow="2px 2px 3px" onClick={
                        () => {

                            history.push("/login")

                        }}>Logout</Button>
                    <Button className="float-right mr-3" onClick={
                        () => {

                            history.push("/about")

                        }}>About</Button>
                </Container>

            </div>

        </>
    )
}