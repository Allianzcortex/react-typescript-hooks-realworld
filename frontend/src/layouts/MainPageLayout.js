import React,{Fragment} from "react";
import TopicBar from "../componnets/topicBar";
import PostList from "../componnets/post/postList";
import SplitLine from "../componnets/utils/split-line";
import TagList from "../componnets/utils/tagList";
import Pagination from "../componnets/utils/pagination";
import Header from '../componnets/header'
import {MainContentWrapper,LeftBarWrapper,RightBarWrapper} from "./index";

function MainPageLayout(props) {
    return (
        <Fragment>
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

export default MainPageLayout
