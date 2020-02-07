import React,{Fragment} from "react";
import { renderRoutes } from "react-router-config";
import Header from '../componnets/header'
import {Link} from "react-router-dom";
import About from "../componnets/about";
import {MainContentWrapper,LeftBarWrapper,RightBarWrapper} from "./index";

// import route from '../routes/index'



function HomeLayout(props) {
    const {route}=props
    return (
        <Fragment>
            <Header/>
            <MainContentWrapper>
                <LeftBarWrapper>
                    {renderRoutes(route.routes)}
                </LeftBarWrapper>
            </MainContentWrapper>
            <br/>
        </Fragment>
    )
}

export default HomeLayout
