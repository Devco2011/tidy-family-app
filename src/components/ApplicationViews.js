import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { FamMemProvider } from "./famMembers/FamMemProvider.js"
import { FamMembersList } from "./famMembers/FamMemList.js";
import { FamMemberForm } from "./famMembers/FamMemForm.js";
import { FamMemberDetail } from "./famMembers/FamMemDetails.js";
import { Container, Row, Col } from "reactstrap"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <FamMemProvider>
                <Route exact path="/">
                    <Home />
                    <Col xs="6 pt-5"><FamMembersList /></Col>
                </Route>
            </FamMemProvider>

            <FamMemProvider>
                <Route exact path="/famMembers/detail/:famMemberId(\d+)">
                    <Home />
                    <FamMemberDetail />
                </Route>
            </FamMemProvider>

            <FamMemProvider>
                <Route exact path="/famMembers/create">
                    <Home />
                    <FamMemberForm />
                </Route>
            </FamMemProvider>

            <FamMemProvider>
                <Route path="/famMembers/edit/:famMemberId(\d+)">
                    <FamMemberForm />
                </Route>
            </FamMemProvider>
        </>
    )
}