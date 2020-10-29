import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';

export const MyDashNavBar = (props) => {

    let history = useHistory()

    return (
        <div>
            <Button type="button" onClick={() => history.push("/")}>
                Family Home
      </Button>

            <Button type="button" onClick={() => history.goBack()}>
                Go Back
      </Button>
        </div>

    );
}