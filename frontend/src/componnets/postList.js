import React, {useEffect, Fragment, useState} from "react";
import Post from "./post";
import {postSerivce} from "../_services/post.service";
import styled from "styled-components";
import {renderRoutes} from "react-router-config";

export const PostListWrapper = styled.div`
 display:flex;
    flex-direction: column;
`

function PostList(props) {
    // No need to store posts into redux
    const [posts, setPosts] = useState({})
    useEffect(async () => {
        await postSerivce.getAllPosts().then(
            res => {
                console.log(res.data.posts)
                setPosts(res.data.posts)
            }
        )
    }, [])

    return (
        <Fragment>
            {Object.keys(posts).map(x => {
                return (<Post key={posts[x].title} author={posts[x].author}
                              title={posts[x].title} tagList={posts[x].tagList}
                              commentCount={posts[x].commentCount}/>)
            })
            }
        </Fragment>
    )
}

export default PostList
