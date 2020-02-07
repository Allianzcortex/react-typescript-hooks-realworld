import React,{Fragment} from "react";
import TopicBar from "../componnets/topicBar";
import PostList from "../componnets/postList";
import SplitLine from "../componnets/split-line";
import TagList from "../componnets/tagList";
import Pagination from "../componnets/pagination";
import Header from '../componnets/header'
import {MainContentWrapper,LeftBarWrapper,RightBarWrapper} from "./index";

function MainPageLayout(props) {
    return (
        <Fragment>
            <TopicBar/>
            <SplitLine/>
            <PostList/>
            <Pagination/>
        </Fragment>
    )
}

export default MainPageLayout
