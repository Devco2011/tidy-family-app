import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';

export const MyDashNavBar = (props) => {

    let history = useHistory()

    return (
        <div className="myDashNav ml-3">
            <Button type="button mr-3" onClick={() => history.push("/")}>
                Family Home
      </Button>

            <Button className="button ml-3" onClick={() => history.goBack()}>
                Go Back
      </Button>
        </div>

    );
}