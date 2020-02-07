import React, {Fragment, useEffect} from "react";

import SingleComment from "./singleComment";
import CommentBox from "./commetBox";


// TODO should retrieve All the comment here

function CommentList(props) {

    return (
        <Fragment>
            <SingleComment/>
            <SingleComment/>
            <CommentBox/>
        </Fragment>
    )
}

export default CommentList;
