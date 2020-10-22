import React, { useContext, useEffect } from "react"
import { ProfilePicContext } from "./ProfilePicProvider"
import { ProfilePicCard } from "./ProfilePicCard"
import { Container, CardGroup } from 'reactstrap';


export const ProfilePicList = () => {
    const { profilePics, getProfilePics } = useContext(ProfilePicContext)
    useEffect(() => {
        getProfilePics()
    }, [])

    return (
        <Container>
            <CardGroup>

                {
                    profilePics.map(profilePic => {
                        return <ProfilePicCard key={profilePic.id} src={profilePic.src} profilePic={profilePic} />

                    })
                }
            </CardGroup>
        </Container>
    )
}