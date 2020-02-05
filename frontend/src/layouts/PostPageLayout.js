import React, {Fragment} from "react";
import TopicBar from "../componnets/topicBar";
import PostList from "../componnets/postList";
import SplitLine from "../componnets/split-line";
import TagList from "../componnets/tagList";
import Pagination from "../componnets/pagination";
import Header from '../componnets/header'
import PostDetail from "../componnets/postDetail";
import {MainContentWrapper, LeftBarWrapper, RightBarWrapper} from "./index";

function PostPageLayout(props) {
    return (
        <Fragment>
            <Header/>
            <MainContentWrapper>
                <LeftBarWrapper>
                    <PostDetail/>
                    <SplitLine/>
                </LeftBarWrapper>
            </MainContentWrapper>
        </Fragment>
    )
}

export default PostPageLayout
