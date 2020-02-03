import React,{Fragment} from "react";
import { renderRoutes } from "react-router-config";
import Header from '../componnets/header'
import TopicBar from "../componnets/topicBar";
import {MainContentWrapper,LeftBarWrapper,RightBarWrapper} from "./index";

function HomeLayout(props) {
    return (
        <Fragment>
            <Header></Header>
            <MainContentWrapper>
                <LeftBarWrapper>
                    <TopicBar/>
                </LeftBarWrapper>
                <RightBarWrapper></RightBarWrapper>
            </MainContentWrapper>
        </Fragment>
    )
}

export default HomeLayout
