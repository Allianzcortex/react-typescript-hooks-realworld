import React, {useEffect, Fragment, useState} from "react";
import {PostListWrapper} from "./style";
import Post from "../post";
import {postSerivce} from "../../_services/post.service";

function PostList(props) {
    // No need to store posts into redux
    const [posts,setPosts]=useState({})
    useEffect(async ()=>{
        await postSerivce.getAllPosts().then(
            res=>{console.log(res)
            setPosts(res.data.posts)}
        )
    },[])

    return (
        {Object.keys(posts).map(x=>{
        return (<Post author={x.author}
        title={x.title} tagList={x.tagList}
        commentCount={x.commentCount}/>)})
        }
    )
}

export default PostList
