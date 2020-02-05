import React,{Fragment} from "react";
import { renderRoutes } from "react-router-config";
import Header from '../componnets/header'
import TopicBar from "../componnets/topicBar";
import PostList from "../componnets/postList";
import SplitLine from "../componnets/split-line";
import TagList from "../componnets/tagList";
import Pagination from "../componnets/pagination";
import {MainContentWrapper,LeftBarWrapper,RightBarWrapper} from "./index";

function HomeLayout(props) {
    return (
        <Fragment>
            <Header></Header>
            <MainContentWrapper>
                <LeftBarWrapper>
                    <TopicBar/>
                    <SplitLine/>
                    <PostList/>
                    <Pagination/>
                </LeftBarWrapper>
                <RightBarWrapper>
                    <TagList/>
                </RightBarWrapper>
            </MainContentWrapper>

        </Fragment>
    )
}

export default HomeLayout
