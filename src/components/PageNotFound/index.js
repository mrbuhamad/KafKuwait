import React from 'react';
import {NavLink} from "react-router-dom";

import './style.scss';

const PageNotFound = () =>{
    return (
        <div className="container">
            <div className="errorPage">
                <h2>Page Not Pound</h2>
                <NavLink to="/">Go Back</NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;