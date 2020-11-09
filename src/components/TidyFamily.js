import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews.js";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import 'bootstrap/dist/css/bootstrap.min.css';




export const TidyFamily = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem("family_name")) {
        return (
          <>
            <ApplicationViews />
          </>
        )
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>
  </>
)
