import React,{Fragment} from "react";
import { renderRoutes } from "react-router-config";
import Header from '../componnets/header'
import {Link} from "react-router-dom";
import About from "../componnets/about";

// import route from '../routes/index'



function HomeLayout(props) {
    const {route}=props
    return (
        <Fragment>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link  to='/about'>post</Link>
            {renderRoutes(route.routes)}
        </Fragment>
    )
}

export default HomeLayout
