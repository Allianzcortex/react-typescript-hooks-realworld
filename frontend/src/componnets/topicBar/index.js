import React, {useEffect, Fragment} from "react";
import {TopicBarWrapper} from "./style";

function TopicBar(props) {
    return (
        <Fragment>
            <TopicBarWrapper>
                <a href="aaa">Python</a>
                <a href="aaa">Java</a>
                <a href="aaa">Spring</a>
            </TopicBarWrapper>
        </Fragment>
    )
}

export default TopicBar
