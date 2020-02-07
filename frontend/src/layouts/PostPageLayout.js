import React, {Fragment} from "react";
import TopicBar from "../componnets/topicBar";
import PostList from "../componnets/post/postList";
import SplitLine from "../componnets/utils/split-line";
import TagList from "../componnets/utils/tagList";
import Pagination from "../componnets/utils/pagination";
import Header from '../componnets/header'
import PostDetail from "../componnets/post/postDetail";
import CommentList from "../componnets/comment/commentList";
import {MainContentWrapper, LeftBarWrapper, RightBarWrapper} from "./index";

function PostPageLayout(props) {
    return (
        <Fragment>
            <MainContentWrapper>
                <LeftBarWrapper>
                    <PostDetail/>
                    <SplitLine/>
                    <CommentList/>
                </LeftBarWrapper>
            </MainContentWrapper>
        </Fragment>
    )
}

export default PostPageLayout
