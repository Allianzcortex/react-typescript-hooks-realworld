import React, {Fragment} from "react";
import {TopicBar, SplitLine, TagList, Pagination} from "../componnets/utils";
import {PostList} from "../componnets/post"
import {MainContentWrapper, LeftBarWrapper, RightBarWrapper} from "./style";

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
