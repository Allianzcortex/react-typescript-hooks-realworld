import React, {Fragment, useEffect} from "react";
import styled from "styled-components";
import {TextField,Button} from "@material-ui/core";

// A wrapper of material UI for textfield input

const CommentBoxWrapper=styled.div`
    margin:10px 20px;
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: start;
    // 避免填充 with align-items
    align-items: start;
    
    button {
    margin-top:10px;
    //margin-left:390px;
    margin-right:20px;
    align-self: end;
    //left:80%;
    }
`

// TODO we may want to move
function CommentBox(props) {

    return (
        <CommentBoxWrapper>
        <TextField
            id="standard-textarea"
            label="Type Your Comment Here"
            placeholder="Type Your Comment Here"
            multiline
            variant="outlined"
            color="primary"
            fullWidth
        />
            <Button variant="contained" color="primary" size="small">
                Publish
            </Button>
        </CommentBoxWrapper>
    )
}

export default CommentBox
