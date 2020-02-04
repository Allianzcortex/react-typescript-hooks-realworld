import React, {useEffect, Fragment} from "react";
import {PostWrapper} from "./style";

function Post(props) {
    return (
        <PostWrapper>
            <div className="avatar">
                <span className="initials">MS</span>
            </div>
            <div className="post-initial-content">
                <h4>aws 的route 53 算是几级域名解析？</h4>
                <div className="post-meta">
                    aa . bb . cc . dd .
                </div>
            </div>
            <div className="comment-count">
                23
            </div>

        </PostWrapper>
    )
}

export default Post
