//Transforms component into another component
//adding additional functionalities to the existing components.

import React from "react";
import { Route } from "react-router-dom";

//layouts
import MovieLayout from "../layouts/movie.layout";

const MovieHOC = ({component:Component,...rest}) =>{
    //component
    //props ->paths,exact
    return(
        <>
        <Route {...rest}
        component = {(props) =>(
            <MovieLayout>
                <Component {...props}/>
            </MovieLayout>
        )}
        />
        </>
    );

};


export default MovieHOC;
 