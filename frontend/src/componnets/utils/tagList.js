import React, {useEffect, Fragment, useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {FormControlLabel,Checkbox} from "@material-ui/core";
import {setCurrentTag} from "../../store/actionCreators/util.action.creators";
import PropTypes from "prop-types"

const TagWrapper=styled(Checkbox)`
    //margin:4px 5px ;
    //display: flex;
    ///* flex 如何水平垂直居中 https://www.jianshu.com/p/7baa3d4a1e9c */
    ///* 一个是 justify-content，另一个是 align-items */
    //align-items: center;/*垂直居中*/
    //justify-content: center;
    //cursor: pointer;
    //
    //&:hover{
    //background-color: rgb(226, 226, 226);
    //cursor:pointer;
    //}
    //
    //&:focus{
    // background-color: rgb(226, 226, 226);
    //}
    c
`

function TagList(props) {



    const Tag=(props)=>{
        const {value}=props
        const dispatch=useDispatch()
        const handleChnage=(e)=>{
            // TODO handle more cases 比如 tag 的增减
            console.log(`${e.target.value} ${e.target.checked}`)
            dispatch(setCurrentTag(e.target.value))
        }

        return ( <FormControlLabel
            control={
                <Checkbox
                    onChange={handleChnage}
                    value={value}
                    size='small'
                    color="primary"
                />
            }
            label={value}
        />)
    }

    Tag.propTypes={
        value:PropTypes.string.isRequired,
    }

    return(
        <Fragment>
            <Tag value="123" />
            <Tag value="456" />
            <Tag value="789" />
        </Fragment>
    )

}

export default TagList
