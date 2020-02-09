import React, {Fragment, useEffect} from "react";
import styled from "styled-components";
import SplitLine from "../utils/splitLine";
import PropTypes from "prop-types"

const SingleCommentWrapper = styled.div`
margin: 10px 20px;
    
    display: flex;
      justify-content: space-between;
    
    .comment-body {
    display: flex;
    flex-direction: column;
    
      .item {
        margin:5px 0;
      }
    }
`

function SingleComment(props) {
    const {author,commentBody,commentTime,floor}=props
    return (
        <Fragment>
        <SingleCommentWrapper>
        <div className="comment-body">
            <p className="item"> {author} {commentTime}</p>
            <p className="item"> {commentBody}</p>
        </div>
            <div>{floor}</div>
        </SingleCommentWrapper>
        <SplitLine/>
            </Fragment>
    )
}

SingleComment.prototype = {
    author:PropTypes.string,
    commentBody:PropTypes.string,
    commentTime:PropTypes.string,
    floor:PropTypes.number,
}

SingleComment.defaultProps={
    author:"author",
    commentBody:"commentBody",
    commentTime:"commentTime",
    floor:1,
}

export default SingleComment;
