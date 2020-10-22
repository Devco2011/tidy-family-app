import React, { useState, createContext } from "react"

export const ProfilePicContext = createContext()

export const ProfilePicProvider = (props) => {
    const [profilePics, setProfilePics] = useState([])

    const getProfilePics = () => {
        return fetch("http://localhost:8088/profilePics")
            .then(res => res.json())
            .then(setProfilePics)
    }
    const addProfilePic = profilePicObj => {
        return fetch("http://localhost8088/profilePics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profilePicObj)
        })
            .then(getProfilePics)
    }
    return (
        <ProfilePicContext.Provider value={{
            profilePics, getProfilePics, addProfilePic
        }}>
            {props.children}
        </ProfilePicContext.Provider>
    )
}