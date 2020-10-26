import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { FamMemProvider } from "./famMembers/FamMemProvider.js"
import { FamMembersList } from "./famMembers/FamMemList.js";
import { FamMemberForm } from "./famMembers/FamMemForm.js";
import { FamMemberDetail } from "./famMembers/FamMemDetails.js";
import { ChooseFamMemberList } from "./famMembers/ChooseFamMemberList";
import { AddFirstMember } from "./famMembers/AddFirstMember"
import { ProfilePicProvider } from "./profilePics/ProfilePicProvider";
import { ProfilePicList } from "./profilePics/ProfilePicList"
import { ChoreProvider } from "./chores/ChoreProvider";
import { AvailableChoreList } from "./chores/AvailableChoreList";
import { CompletedChoreList } from "./chores/CompletedChoreList";
import { CompletedChoreModal } from "./chores/CompletedChoreModal";
import { FamMemberPointsList } from "./points/FamMemberPointsList"


import { Container, Row, Col } from "reactstrap"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <FamMemProvider>
                <ProfilePicProvider>
                    <Route exact path="/famMembers/firstMember">
                        <Home />
                        <Col xs="6 pt-5"><AddFirstMember /></Col>
                    </Route>
                </ProfilePicProvider>
            </FamMemProvider>

            <FamMemProvider>
                <Route exact path="/famMembers/choose">
                    <Home />
                    <Col xs="6 pt-5"><ChooseFamMemberList /></Col>
                </Route>
            </FamMemProvider>


            <FamMemProvider>
                <Route exact path="/">
                    <Home />
                    <Col xs="6 pt-5"><FamMembersList /></Col>
                </Route>
            </FamMemProvider>

            <FamMemProvider>
                <Route exact path="/famMembers/detail/:famMemberId(\d+)">
                    <Home />
                    <Col xs="6 pt-5"><FamMemberDetail /></Col>
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

            <ChoreProvider>
                <Route exact path="/chores/available">
                    <Home />
                    <AvailableChoreList />
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route exact path="/chores/completed">
                    <Home />
                    <CompletedChoreList />
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route path="/chores/completedForm/:choreId(\d+)">
                    <Home />
                    <CompletedChoreModal />
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route path="/chores/points">
                    <Home />
                    <FamMemberPointsList />
                </Route>
            </ChoreProvider>


        </>
    )
}