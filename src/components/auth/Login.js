import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { Container, Row, Col, CardGroup } from 'reactstrap';
import TidyFamily from '../images/TidyFamily.png'
import "./Login.css";




export const Login = props => {
    const email = useRef()
    const famName = useRef()
    const id = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/families?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("family_name", exists.famName)
                    localStorage.setItem("family_id", exists.id)
                    history.push("famMembers/choose/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (


        <main className="container--login">
            <Container fluid>
                <div>
                    <img width="40%" src={TidyFamily} alt="Tidy Family" />
                </div>
            </Container>
            <div className="loginGetBusy">
                <h4>Log in and get busy!</h4>
                <dialog className="dialog dialog--auth" ref={existDialog}>
                    <div>Not Found! Try again or register your family.</div>
                    <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
                </dialog>
            </div>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputFamName"> Family Name </label>
                        <input ref={famName} type="famName"
                            id="famName"
                            className="form-control"
                            placeholder="Family Name"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <h2>OR</h2>
                <Link to="/register">Register Your Family</Link>
            </section>
        </main>
    )
}