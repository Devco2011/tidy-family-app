import React from "react";
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';



export const Home = () => {
    const history = useHistory();

    return (
        <>
            <div>


                <Container fluid className='bg-white'>
                    <h1 className="display-3">Tidy Family</h1>
                    <p className="lead">Clean up, get stuff.</p>
                    <h2>The {localStorage.family_name} Family Rocks!</h2>

                    <Button onClick={
                        () => {

                            history.push("/login")

                        }}>Logout</Button>
                </Container>

            </div>

        </>
    )
}