import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

export const NavBar = (props) => {
    let history = useHistory()


    return (

        <div className="FamilyHomeBtn ml-3">
            <Button type="button pl-3" onClick={() => history.push("/")}>
                Family Home
      </Button>
        </div>
    );
}