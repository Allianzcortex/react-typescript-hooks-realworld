import React, {useEffect, Fragment, useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {FormControlLabel, Checkbox} from "@material-ui/core";
import {setCurrentTag} from "../../store/actionCreators/util.action.creators";
import PropTypes from "prop-types"

const TagWrapper = styled.div`
    

    .MuiTypography-body1 { border:.5px solid gray;
        background:lightgray;
        border-radius:7px}
`

function TagList(props) {

    const tagStyle = {}

    const Tag = (props) => {
        const {value} = props
        const dispatch = useDispatch()
        const handleChnage = (e) => {
            // TODO handle more cases 比如 tag 的增减
            console.log(`${e.target.value} ${e.target.checked}`)
            dispatch(setCurrentTag(e.target.value))
        }

        return (
            <TagWrapper>
                <FormControlLabel style={tagStyle}
                                  control={
                                      <Checkbox
                                          onChange={handleChnage}
                                          value={value}
                                          size='small'
                                          color="primary"
                                      />
                                  }
                                  label={value}
                />
            </TagWrapper>)
    }

    Tag.propTypes = {
        value: PropTypes.string.isRequired,
    }

    return (
        <Fragment>
            <Tag value="123"/>
            <Tag value="456"/>
            <Tag value="789"/>
        </Fragment>
    )

}

export default TagList
