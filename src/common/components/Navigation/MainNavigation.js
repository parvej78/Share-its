import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";

const MainNavigation = (props) =>{
    return (
    <MainHeader>
        <h1 className="mainnav-title">
            <Link to ="/">Share-it</Link>
         </h1> 
         <nav>
        <NavLinks/>
         </nav>
       </MainHeader>
    );
};

export default MainNavigation;
