import styled from "styled-components";

export const PostWrapper=styled.div`
display: flex;

.avatar {
    background-color: #ccc;
    /* border-radius: 50%; */
    height: var(--avatar-size);
    text-align: center;
    width: var(--avatar-size);
    /* 让头像居中对齐，这种方式太 ticky..后续
    一定有更好的解决方法 */
    margin:auto 10px;
}

.initials {
    font-size: calc(var(--avatar-size) / 2); /* 50% of parent */
    line-height: 1;
    position: relative;
    top: calc(var(--avatar-size) / 4); /* 25% of parent */
}

.post-initial-content {
    /* border:1px solid; */
    display:flex;
    flex-direction:column;
    position: relative;
    margin-left:10px;
}

h4 {
    /* border:1px solid; */
    position: relative;
   margin-left:0;
   margin-top: 5px;
   margin-bottom:5px;
}

.post-meta {
    /* border:1px solid; */
    position: relative;
    top:0;
    margin-top:5px;
    padding-bottom:5px;
}

.comment-count {
    /* 参考这篇链接：https://stackoverflow.com/questions/22429003/how-to-right-align-flex-item
    用 margin-left: auto 来做到自动对齐
    */
    margin-right:10px;
    display:flex;
    vertical-align: middle;
    text-align: center;
    /* color: #645353; */
    border-radius: 3rem;
    background: #ccc;
    margin: .25rem;
    margin-top:auto;
    margin-bottom: auto;
    margin-left:auto !important;
    padding: 0 1rem;
    height: 1rem;
    line-height: 1rem;
    font-weight: 400;
    font-size: 16px;
}

`
