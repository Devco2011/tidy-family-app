import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { FamMemProvider } from "./famMembers/FamMemProvider.js"
import { FamMemberForm } from "./famMembers/FamMemForm.js";
import { FamMemberDetail } from "./famMembers/FamMemDetails.js";
import { ChooseFamMemberList } from "./famMembers/ChooseFamMemberList";
import { AddFirstMember } from "./famMembers/AddFirstMember"
import { ProfilePicProvider } from "./profilePics/ProfilePicProvider";
import { ProfilePicList } from "./profilePics/ProfilePicList"
import { ChoreProvider } from "./chores/ChoreProvider";
import { AvailableChoreList } from "./chores/AvailableChoreList";
import { AllChoresList } from "./chores/AllChoresList";
import { CompletedChoreList } from "./chores/CompletedChoreList";
import { CompletedChoreModal } from "./chores/CompletedChoreModal";
import { FamMemberList } from "./points/FamMemberList";
import { PointsCounter } from "./points/PointsCounter";
import { FamiliesProvider } from "./families/FamilyProvider"
import { NavBar } from "./nav/NavBar";
import { MyDashNavBar } from "./nav/MyDashNav";
import { MainAwardsList } from "./awards/MainAwardsList";
import { MainAwardsProvider } from "./awards/MainAwardsProvider";
import { WheelAwardsProvider } from "./awards/WheelAwardsProvider";
import { WheelAwardsList } from "./awards/WheelAwardsList";


import { Container, Row, Col } from "reactstrap"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <FamMemProvider>
                <ProfilePicProvider>
                    <Route exact path="/famMembers/firstMember">
                        <Home />
                        <AddFirstMember />
                    </Route>
                </ProfilePicProvider>
            </FamMemProvider>

            <FamMemProvider>
                <Route exact path="/famMembers/choose">
                    <Home />
                    <Col xs="6 pt-5"><ChooseFamMemberList /></Col>
                </Route>
            </FamMemProvider>


            <ChoreProvider>
                <FamMemProvider>
                    <Route exact path="/">
                        <Home />
                        <Col xs="6 pt-5"><FamMemberList /></Col>
                    </Route>
                </FamMemProvider>
            </ChoreProvider>

            <FamMemProvider>
                <ChoreProvider>
                    <Route exact path="/famMembers/detail/:famMemberId(\d+)">
                        <Home />
                        <NavBar />
                        <Col xs="6 pt-5"><FamMemberDetail /></Col>
                    </Route>
                </ChoreProvider>
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
                <Route exact path="/chores/available/">
                    <Home />
                    <MyDashNavBar />
                    <AvailableChoreList />
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route exact path="/chores/completed">
                    <Home />
                    <MyDashNavBar />
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
                <FamMemProvider>
                    <Route exact path="/chores/points">
                        <Home />
                        <FamMemberList />
                    </Route>
                </FamMemProvider>
            </ChoreProvider>

            <ChoreProvider>
                <FamiliesProvider>
                    <Route exact path="/chores/totalPoints">
                        <Home />
                        <PointsCounter />
                    </Route>
                </FamiliesProvider>
            </ChoreProvider>

            <ChoreProvider>
                <Route exact path="/chores/allChores">
                    <Home />
                    <MyDashNavBar />
                    <AllChoresList />
                </Route>
            </ChoreProvider>

            <MainAwardsProvider>
                <WheelAwardsProvider>
                    <Route exact path="/awards/allAwards">
                        <Home />
                        <MyDashNavBar />
                        <MainAwardsList />
                        <WheelAwardsList />
                    </Route>
                </WheelAwardsProvider>
            </MainAwardsProvider>


        </>
    )
}