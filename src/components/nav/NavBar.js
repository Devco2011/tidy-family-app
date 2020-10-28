import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

export const NavBar = (props) => {
    let history = useHistory()


    return (

        <div>
            <Button type="button" onClick={() => history.push("/")}>
                Family Home
      </Button>
        </div>
    );
}