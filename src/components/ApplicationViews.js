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
import { MainAwardsList } from "./mainAwards/MainAwardsList";
import { MainAwardsProvider } from "./mainAwards/MainAwardsProvider";
import { WheelAwardsProvider } from "./wheelAwards/WheelAwardsProvider";
import { WheelAwardsList } from "./wheelAwards/WheelAwardsList";
import { MainAwardsForm } from "./mainAwards/MainAwardsForm"
import { MainAwardsDetail } from "./mainAwards/MainAwardsDetail"
import { WheelAwardsDetail } from "./wheelAwards/WheelAwardsDetail";
import { WheelAwardsForm } from "./wheelAwards/WheelAwardsForm";
import { ChoreDetail } from "./chores/ChoreDetail";
import { ChoreForm } from "./chores/ChoreForm";
import { SelectedMainList } from "./mainAwards/SelectedMainList";
import { IndiWheelList } from "./wheelAwards/IndiWheelList";
import { Wheel } from "./wheel/WheelComponent"

import { CountDown } from "./countDown/CountDown"


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
                    <FamiliesProvider>
                        <MainAwardsProvider>
                            <Route exact path="/">
                                <Home />
                                <Container>
                                    <Row>
                                        <Col xs="6 pt-5"><FamMemberList /></Col>
                                        <Col xs="6 pt-5"><SelectedMainList />
                                            <PointsCounter />
                                            <CountDown timeTillDate="11 11 2020, 12:10 am" timeFormat="MM DD YYYY, h:mm a" />
                                        </Col>
                                    </Row>
                                </Container>
                            </Route>
                        </MainAwardsProvider>
                    </FamiliesProvider>
                </FamMemProvider>
            </ChoreProvider>


            <FamMemProvider>
                <ChoreProvider>
                    <WheelAwardsProvider>
                        <Route exact path="/famMembers/detail/:famMemberId(\d+)">
                            <Home />
                            <NavBar />
                            <Container>
                                <Row>
                                    <Col><FamMemberDetail /></Col>
                                </Row>
                            </Container>
                        </Route>
                    </WheelAwardsProvider>
                </ChoreProvider>
            </FamMemProvider>

            <FamMemProvider>
                <ProfilePicProvider>
                    <Route exact path="/famMembers/create">
                        <Home />
                        <FamMemberForm />
                    </Route>
                </ProfilePicProvider>
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
                    <Container>
                        <Row>
                            <Col><AllChoresList /></Col>
                        </Row>
                    </Container>
                </Route>
            </ChoreProvider>

            <MainAwardsProvider>
                <WheelAwardsProvider>
                    <Route exact path="/awards/allAwards">
                        <Home />
                        <MyDashNavBar />
                        <h3>Manage All Awards</h3>
                        <Container>
                            <Row>
                                <Col><MainAwardsList /></Col>
                                <Col><WheelAwardsList /></Col>
                            </Row>
                        </Container>
                    </Route>
                </WheelAwardsProvider>
            </MainAwardsProvider>

            <MainAwardsProvider>
                <Route exact path="/mainAwards/detail/:mainAwardsId(\d+)">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><MainAwardsDetail /></Col>
                        </Row>
                    </Container>
                </Route>
            </MainAwardsProvider>

            <MainAwardsProvider>
                <Route exact path="/mainAwards/edit/:mainAwardsId(\d+)">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><MainAwardsForm /></Col>
                        </Row>
                    </Container>
                </Route>
            </MainAwardsProvider>

            <WheelAwardsProvider>
                <Route exact path="/wheelAwards/detail/:wheelAwardsId(\d+)">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><WheelAwardsDetail /></Col>
                        </Row>
                    </Container>
                </Route>
            </WheelAwardsProvider>

            <WheelAwardsProvider>
                <Route exact path="/wheelAwards/edit/:wheelAwardsId(\d+)">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><WheelAwardsForm /></Col>
                        </Row>
                    </Container>
                </Route>
            </WheelAwardsProvider>

            <WheelAwardsProvider>
                <Route exact path="/wheelAwards/create">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><WheelAwardsForm /></Col>
                        </Row>
                    </Container>
                </Route>
            </WheelAwardsProvider>

            <MainAwardsProvider>
                <Route exact path="/mainAwards/create">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><MainAwardsForm /></Col>
                        </Row>
                    </Container>
                </Route>
            </MainAwardsProvider>

            <ChoreProvider>
                <Route exact path="/chores/detail/:choreId(\d+)">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><ChoreDetail /></Col>
                        </Row>
                    </Container>
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route exact path="/chores/edit/:choreId(\d+)">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><ChoreForm /></Col>
                        </Row>
                    </Container>
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route exact path="/chores/create/">
                    <Home />
                    <MyDashNavBar />
                    <Container>
                        <Row>
                            <Col><ChoreForm /></Col>
                        </Row>
                    </Container>
                </Route>
            </ChoreProvider>

            <ChoreProvider>
                <Route exact path="/familyPoints/">
                    <PointsCounter />
                </Route>
            </ChoreProvider>

            <WheelAwardsProvider>
                <Route exact path="/spin-the-wheel">
                    <Home />
                    <Wheel />
                </Route>
            </WheelAwardsProvider>






        </>
    )
}