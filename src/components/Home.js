import React from "react";
import { Container, Row, Col } from 'reactstrap'



export const Home = () => (
    <>
        <Container style={{ width: "100%", height: "80%" }} className='bg-white' >
            <Row>
                <h2>Tidy Family</h2>
            </Row>

            <small>Clean up, get stuff.</small>

            <h2>The {localStorage.family_name} Family Rocks!</h2>
        </Container>

    </>
)