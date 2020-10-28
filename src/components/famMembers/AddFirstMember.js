import React, { useContext, useRef, useState, useEffect } from "react"
import { FamMemberContext } from "./FamMemProvider";
import { ProfilePicContext } from "../profilePics/ProfilePicProvider";
import { useHistory, useParams, Link } from 'react-router-dom';
import { ProfilePicCard } from "../profilePics/ProfilePicCard"
import { Container, CardGroup } from 'reactstrap';


export const AddFirstMember = () => {
    const { addFamMember } = useContext(FamMemberContext)
    const famMemberName = useRef()
    const famMember = useRef(null)
    const history = useHistory();
    const { profilePics, getProfilePics } = useContext(ProfilePicContext)


    useEffect(() => {
        getProfilePics()
    }, [])

    const constructFamMemberObject = () => {
        if (famMemberName.current.value === "" || (sessionStorage.getItem("profilePic")) === null) {
            window.alert("Please enter your name and select an avatar!")
        } else {

            addFamMember({
                name: `${famMemberName.current.value}`,
                familyId: parseInt(localStorage.getItem("family_id")),
                points: 0,
                admin: true,
                profilePicId: parseInt(sessionStorage.getItem("profilePic"))
            })
                .then(() => history.push("/"))
        }
    }



    return (
        <main >
            <form className="famMemberForm">
                <h2 style={{ textAlign: "center" }} className="famMemberForm__title">Add your first family member.</h2>
                <p>Because you are the first member of your family, you will be given admin control so you can start adding family members and chores!</p>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="famMemberName">What does your family call you? </label>
                        <input ref={famMemberName} type="text"
                            id="famMemberName"
                            name="name"
                            className="form-control"
                            placeholder="Family member name"
                            required autoFocus />
                    </div>

                </fieldset>
                <Container>
                    <h5>Please select an avatar:</h5>
                    <CardGroup>

                        {
                            profilePics?.map(profilePic => {
                                return <ProfilePicCard key={profilePic.id} src={profilePic.src} profilePic={profilePic} />

                            })
                        }
                    </CardGroup>
                </Container>


                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault() // Prevent browser from submitting the form
                        constructFamMemberObject()
                        sessionStorage.setItem("family_member", famMemberName.current.value)
                    }}>
                    Add Family Member</button>
            </form>
        </main>
    )
}
