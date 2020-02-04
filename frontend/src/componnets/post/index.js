import React, {useEffect, Fragment} from "react";
import {PostWrapper} from "./style";
import SplitLine from "../split-line";
import PropTypes from "prop-types"

function Post(props) {
    const {author, title, tatList, commentCount} = props;
    console.log(`author is ${author}`)
    return (
        <Fragment>
            <PostWrapper>
                <div className="avatar">
                    <span className="initials">{author}</span>
                </div>
                <div className="post-initial-content">
                    <h4>{title}</h4>
                    <div className="post-meta">
                        aa . bb . cc . dd .
                    </div>
                </div>
                <div className="comment-count">
                    {commentCount}
                </div>
            </PostWrapper>
            <SplitLine/>
        </Fragment>
    )
}

Post.defaultProps = {
    author: 'MS',
    title: 'MS 111',
    tagList: ['aa', 'bb', 'cc'],
    commentCount: 12,
}

Post.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    tagList: PropTypes.array,
    commentCount: PropTypes.number,
}

// Post.prototype

export default Post
