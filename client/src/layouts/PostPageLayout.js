import React, {Fragment} from "react";

import {SplitLine} from "../componnets/utils";
import {PostDetail} from "../componnets/post";
import {CommentList} from "../componnets/comment";
import {MainContentWrapper, LeftBarWrapper} from "./style";

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
