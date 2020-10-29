import React, { useContext, useState, useEffect, useRef } from "react"
import { FamMemberContext } from "./FamMemProvider";
import { ProfilePicContext } from "../profilePics/ProfilePicProvider";
import { ProfilePicCard } from "../profilePics/ProfilePicCard";
import { useHistory, useParams } from 'react-router-dom';
import { Container, CardGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const FamMemberForm = (props) => {
    const { addFamMember, getFamMemberById, updateFamMember } = useContext(FamMemberContext)
    const famMemberName = useRef()
    const admin = useRef()
    const { profilePics, getProfilePics } = useContext(ProfilePicContext)

    //for edit, hold on to state of fam member in this view
    const [famMember, setFamMembers] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { famMemberId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newFamMember = { ...famMember }
        //famMember is an object with properties. 
        //set the property to the new value
        newFamMember[event.target.name] = event.target.value
        //update state
        setFamMembers(newFamMember)
    }

    // If famMemberId is in the URL, getFamMemberById
    useEffect(() => {

        if (famMemberId) {
            getFamMemberById(famMemberId)
                .then(famMember => {
                    setFamMembers(famMember)
                    setIsLoading(false)
                })
        } else {
            getProfilePics()
            setIsLoading(false)
        }

    }, [])

    const constructFamMemberObject = () => {
        if (famMemberName.current.value === "" || (sessionStorage.getItem("profilePic")) === null) {
            window.alert("Please enter your name and select an avatar!")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (famMemberId) {
                //PUT - update
                updateFamMember({
                    id: famMember.id,
                    name: famMember.name,
                    profilePicId: parseInt(famMember.profilePicId)
                })
                    .then(() => history.push(`/famMembers/detail/${famMember.id}`))
            } else {
                //POST - add
                addFamMember({
                    name: `${famMemberName.current.value}`,
                    familyId: parseInt(localStorage.getItem("family_id")),
                    admin: famMember.admin,
                    profilePicId: parseInt(sessionStorage.getItem("profilePic"))
                })
                    .then(() => history.push("/"))
            }
        }
    }

    return (
        <form className="famMemberForm">
            <h2 className="famMemberForm__title">Add a Family Member</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="famMemberName">What does your family call you? </label>
                    <input ref={famMemberName} type="text"
                        id="famMemberName"
                        name="name"
                        className="form-control"
                        placeholder="Family member name"
                        required autoFocus
                        onChange={handleControlledInputChange}
                        defaultValue={famMember.name} />
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

            <UncontrolledDropdown>
                <DropdownToggle caret>
                    Admin?
      </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Make Admin?</DropdownItem>

                    <DropdownItem onClick={event => {
                        event.preventDefault()
                        famMember.admin = true
                    }}>Yes</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={event => {
                        event.preventDefault()
                        famMember.admin = false
                    }}>No</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>


            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructFamMemberObject()
                }}>
                {famMemberId ? <>Save Family Member</> : <>Add Family Member</>}</button>
        </form>
    )
}