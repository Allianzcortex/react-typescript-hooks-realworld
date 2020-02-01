import React from "react";
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import register from "../componnets/register";
import Header from "../componnets/header";

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
                path: '/',
                component: Header
            }
        ]
    }
]

export {routes}
