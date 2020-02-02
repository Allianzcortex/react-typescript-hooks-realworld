import React from "react";
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import Register from "../componnets/register";
import Header from "../componnets/header";
import About from "../componnets/about";

const defaultLayout = ({route}) => (
    <div>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);


const routes = [
    {
        component: defaultLayout,
        routes: [
            // register
            {
                path:'/register',
                component:Register,
            }
            ,
            {
                path: '/',
                exact:true,
                component: Header
            },
            {
                // TODO use carousel to show the stack
                path:'/about',
                exact:true,
                component:About
            }
        ]
    }
]

export {routes}
