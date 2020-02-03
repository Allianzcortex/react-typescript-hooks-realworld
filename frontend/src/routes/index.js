import React from "react";
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import Register from "../componnets/register";
import Header from "../componnets/header";
import About from "../componnets/about";
import HomeLayout from '../layouts/HomeLayout'

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
                // TODO use carousel to show the stack
                path:'/about',
                exact:true,
                component:About
            },
            {
                path: '/',
                exact:true,
                component: HomeLayout,
                routes:[

                ]
            },

        ]
    }
]

export {routes}
