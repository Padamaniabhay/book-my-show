import React from "react";

//component
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/heroCarousal.component";

const DefaultLayout = (props) =>{
    return(
        <>
        <Navbar/>
        <HeroCarousal/>
        {props.children}
        </>
    );
};

export default DefaultLayout;