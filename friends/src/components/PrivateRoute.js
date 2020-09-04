import React, { Component } from "react"
import {Route, Redirect} from "react-router-dom";


//This is the bit of this I understand least

//Is it saying here that it takes a component as props and adds it to an object?
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            //What is being expanded/compressed here exactly?
            {...rest}
            render={(props) => {
                if (localStorage.getItem("token")) {
                    //If logged in, render component
                    return <Component {...props}/>;
                } else {
                    return <Redirect to= "/login"/>
                }
            }
        }
        />
    )
}

export default PrivateRoute;