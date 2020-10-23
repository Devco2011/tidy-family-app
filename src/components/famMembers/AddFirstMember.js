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

        addFamMember({
            name: `${famMemberName.current.value}`,
            familyId: parseInt(localStorage.getItem("family_id")),
            points: 0,
            admin: "true",
            profilePicId: parseInt(sessionStorage.getItem("profilePic"))
        })
            .then(() => history.push("/"))
    }



    return (
        <form className="famMemberForm">
            <h2 className="famMemberForm__title">Add your first family member.</h2>
            <h5>Because this is the first member of your family, this person will be given admin control.</h5>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="famMemberName">Family member name: </label>
                    <input type="text" id="famMemberName" name="name" required className="form-control"
                        placeholder="Family member name"
                        ref={famMemberName} />
                </div>

            </fieldset>
            <Container>
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
    )
}
