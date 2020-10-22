import React from "react";
import { Container, Jumbotron, Row, Col } from 'reactstrap'



export const Home = () => (
    <>
        <div>


            <Container fluid className='bg-white'>
                <h1 className="display-3">Tidy Family</h1>
                <p className="lead">Clean up, get stuff.</p>
                <h2>The {localStorage.family_name} Family Rocks!</h2>
            </Container>

        </div>

    </>
)