import React, {useEffect,useState, Fragment} from "react";
import {utilSerivce} from "../../_services/utils.service";
import {TopicBarWrapper} from "./style";
import {setCurrentTopic} from "../../store/actionCreators/util.action.creators";
import {useDispatch} from "react-redux";

// TODO handle onBlur event properly to remove the currrenTopic
// when users click somewhere outside

function TopicBar(props) {
    const [allTabs,setAllTabs]=useState([]);

    useEffect(async ()=>{
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
