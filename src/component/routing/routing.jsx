import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../services/auth";

export const Routing = ({component:Component, ...rest}) => (
    <Route 
        {...rest}
        render={props=> isLoggedIn()? (
            <Component {...props}/>
        ) : (
            <Redirect
                to={{
                    pathname: '/input-datasset',
                    state: {from: '/organisasi'}
                }}
            />
            )
        }
    />
);

export const Routing2 = ({component:Component, ...rest}) => (
    <Route 
        {...rest}
        render={props=> isLoggedIn()? (
            <Component {...props}/>
        ) : (
            <Redirect
                to={{
                    pathname: '/user',
                    state: {from: '/'}
                }}
            />
            )
        }
    />
);