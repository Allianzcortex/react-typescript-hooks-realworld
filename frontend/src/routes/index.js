import React from "react";
import {BrowserRouter,Route,Link,Redirect} from "react-router-dom";


import register from "../componnets/register";

const routes= [
    {
        component:register,
        routes:[
            // register
            {
                // path:'/register',
                // component:register,
            }
        ]
    }
]

export {routes}
