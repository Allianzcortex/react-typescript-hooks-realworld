import React, {FC, Fragment, useState} from "react";
// import {MarkdownIt} from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from "markdown-it/lib";
import {Form,TextArea} from "semantic-ui-react";

export const EditPost: FC<{}> = () => {

    const mdParser = new MarkdownIt();
    const [input_,_]=useState("");
    // const fuck=(text)=>{console.log(text)};
    return (
        <Fragment>
            Please Edit Your Post Here !
            {/*<MdEditor*/}
            {/*    value=""*/}
            {/*    // style={{ height: "500px" }}*/}
            {/*    renderHTML={(text) => mdParser.render(text)}*/}
            {/*    // onChange={handleEditorChange}*/}
            {/*/>*/}
            <Form>
            <TextArea rows={14} onChange={}>
                {input_}
            </TextArea>
            </Form>
            This is the realtime review
            <p>
                ff
                {mdParser.render(input_)}
            </p>

        </Fragment>
    )
}
