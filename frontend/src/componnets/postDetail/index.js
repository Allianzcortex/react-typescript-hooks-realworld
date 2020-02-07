import React, {useEffect, Fragment} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import SplitLine from "../split-line";
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

    // use web ajax call to retrieve the result
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
    title: "sklearn 混合特征工程如何进行训练呢？",
    author: "SlipStupig",
    editedTime: "10h 1m ago",
    commentCount: 302,
    postContent:"想用 sklearn 做个多特征的分类器，特征分别是\n" +
        "            用户 ID\n" +
        "            发帖正文\n" +
        "            发帖时间\n" +
        "            点赞数\n" +
        "            我现在做的时候使用TF-IDF，做分类，单其\n" +
        "            它特征就没有用上，有什么办法能把所有特征用上呢？",
}

export default PostDetail
