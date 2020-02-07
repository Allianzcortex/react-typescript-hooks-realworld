import styled from "styled-components";

import React, {useEffect,useState, Fragment} from "react";
import {utilSerivce} from "../../_services/utils.service";
import {setCurrentTopic} from "../../store/actionCreators/util.action.creators";
import {useDispatch} from "react-redux";

 const TopicBarWrapper=styled.div`
background-color:white;
    /* border:.5px groove gray; */
    /* margin-bottom: 0px; */
    padding: 8px;
    /* height:100%; */
    padding-left:0px;
    display:flex;
    flex-direction: start;
    
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

function TopicBar(props) {
    const [allTabs,setAllTabs]=useState([]);

    useEffect(
        async ()=>{
            await utilSerivce.getAllTopics().then(
                res=>{setAllTabs(res.data);
                    console.log(res.data)}
            )
        },[])

    const dispatch=useDispatch()
    const setTopic=(e)=>{
        console.log(e.target.value);
        dispatch(setCurrentTopic(e.target.value))
    }

    return (
        <Fragment>
            <TopicBarWrapper>
                {allTabs.map((x,index)=>{
                    //<span tabIndex={index}
                    return (<button value={x} onFocus={setTopic}
                                    onBlur={()=>{console.log('lose focus')}}>{x}</button>)
                })}
            </TopicBarWrapper>
        </Fragment>
    )
}

export default TopicBar

