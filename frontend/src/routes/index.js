import React from "react";
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import Register from "../componnets/register";
import Header from "../componnets/header";
import About from "../componnets/about";
import HomeLayout from '../layouts/HomeLayout'
import MainPageLayout from "../layouts/MainPageLayout";
import PostPageLayout from "../layouts/PostPageLayout";

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
            // {
            //
            //     routes:[
            // {
            //     path:'/about',
            //     exact:true,
            //     component:MainPageLayout
            //         // },
            //         {
            //             path:'/post',
            //             exact:true,
            //             component:PostPageLayout
            //         }
            //     ]
            // },
            // register
            {

                path: '/',
                exact: true,
                component: MainPageLayout
            },
            {
                path: '/post',
                exact: true,
                component: PostPageLayout
            },
            {
                path: '/register',
                exact: true,
                component: Register,
            },
            {
                // TODO use carousel to show the stack
                path: '/about',
                exact: true,
                component: About
            },


        ]
    }
]

export {routes}
