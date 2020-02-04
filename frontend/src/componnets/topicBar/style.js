import styled from "styled-components";

export const TopicBarWrapper=styled.div`
background-color:white;
    /* border:.5px groove gray; */
    /* margin-bottom: 0px; */
    padding: 8px;
    /* height:100%; */
    padding-left:0px;
    display:flex;
    flex-direction: flex-start;
    
    button {
    outline: none;
    border:none;
    background:none;
    text-decoration: none;
    color:black;
    font-size:16px;
    /* border:1px solid blue; */
    margin:3px 3px;
    /* TODO 这里用 :nth-firstchild 来
    调节让第一个目录左边的空格再大一点 */
    
    &:hover{
    background-color: rgb(226, 226, 226);
    cursor:pointer;
    }
    
    &:focus{
    // border:none cannot work
    outline:none;
     background-color: rgb(226, 226, 226);
    }
}
`
