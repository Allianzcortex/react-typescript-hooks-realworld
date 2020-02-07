import React, {Fragment, useEffect} from "react";

import SingleComment from "./singleComment";

function CommentList(props) {

    return (
        <Fragment>
            <SingleComment/>
            <SingleComment/>
        </Fragment>
    )
}

export default CommentList;
