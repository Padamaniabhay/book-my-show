//Transforms component into another component
//adding additional functionalities to the existing components.

import React from "react";
import { Route } from "react-router-dom";

//layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component:Component,...rest}) =>{
    //component
    //props ->paths,exact
    return(
        <>
        <Route {...rest}
        component = {(props) =>(
            <DefaultLayout>
                <Component {...props}/>
            </DefaultLayout>
        )}
        />
        </>
    );

};


export default DefaultHOC;
 