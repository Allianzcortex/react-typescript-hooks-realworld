import React, {useEffect, Fragment} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import SplitLine from "../utils/splitLine";
import PropTypes from "prop-types"

const PostDetailWrapper = styled.div`
display: flex;
    flex-direction: column;
    /* padding-left:10px; */
    margin-left:20px;
    margin-right:20px;
    /* padding-right:150px; */
    height:100%;
    
    p,h3{
    //border:1px solid;
    margin-top:15px;
    }
    
    a {
    color:black;
    }
    
    .main-content {
    margin-bottom: 20px;
    }
    
    div {
    background-color: white;
    /* border:1px solid blue; */
    margin-top:20px;
    color:#556;
    /* 这里使用 border-radius 来增加曲线
    看起来更柔和
    TODO 后续也需要看更多 */
    border-radius: 3px;
}
`


function PostDetail(porps) {

    const {topic,title,author,editedTime,commentCount,postContent} = porps

    // use web ajax call to retrieve the post result
    // useEffect((),[])

    return (
        <Fragment>
            <PostDetailWrapper>
                <div >
                    <p>LaraForum &nbsp;>&nbsp; {topic}</p>
                    <h3>{title}</h3>
                    <div>
                        {/*TODO add a button to user to show its clickable*/}
                        <Link to='/{author}'>{author}</Link>  · {editedTime} · {commentCount} comments
                    </div>
                    <SplitLine/>
                    <p className="main-content">
                        {postContent}
                    </p>

                </div>
            </PostDetailWrapper>
        </Fragment>
    )
}

PostDetail.prototype={
    topic: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    editedTime: PropTypes.string,
    commentCount: PropTypes.number,
    postContent:PropTypes.string, // todo handle markdown to HTML
}

PostDetail.defaultProps={
    topic: "Java",
    title: "how to train sklearn machine learning model？",
    author: "SlipStupig",
    editedTime: "10h 1m ago",
    commentCount: 302,
    postContent:"I want to use sklearn as a multi-feature classifier. The features are\n" +
        "            user ID\n" +
        "            post content\n" +
        "            post time\n" +
        "            thumb count\n" +
        "            Im using tf-idf to make the classification\n" +
        "            how to make full use of  other features？",
}

export default PostDetail
