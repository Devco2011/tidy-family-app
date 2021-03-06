import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import { Container, Button } from 'reactstrap'
import TidyFamily from '../images/TidyFamily.png'
import "./Login.css"

export const Register = (props) => {
    const famName = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/families?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/families", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            famName: `${famName.current.value}`,

                        })
                    })



                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                fetch("http://localhost:8088/wheelAwards", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        email: email.current.value,
                                        famName: `${famName.current.value}`,

                                    })
                                })
                                localStorage.setItem("family_name", createdUser.famName)
                                localStorage.setItem("family_id", createdUser.id)
                                history.push("/famMembers/firstMember")

                            }
                        })

                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>
            <Container fluid>
                <div>
                    <img width="40%" src={TidyFamily} alt="Tidy Family" />
                </div>
            </Container>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h4 className="h3 mb-3 font-weight-normal">Welcome to the Family!</h4>
                <fieldset>
                    <label htmlFor="famName"> Family Name </label>
                    <input ref={famName} type="text" name="famName" className="form-control" placeholder="Family name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>

                <fieldset>
                    <Button type="submit"> Sign in </Button>
                </fieldset>
            </form>
        </main>
    )
}