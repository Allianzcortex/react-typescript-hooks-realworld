import React, {FC, useState} from 'react';
import {MenuSelector} from "./MenuSelector";
import {Button, Icon, Input} from "semantic-ui-react";
import {Link} from "react-router-dom";

export const Post: FC<{}> = () => {

    const [parameter, setParameter] = useState({
        category: null,
        tag: null,
        status: null,
        priority: null,
        page: null,
    })


    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex"}}>
                    <MenuSelector/>
                    <MenuSelector/>
                </div>
                <div className="">
                    <Input icon='search' placeholder='Search...'/>
                    &nbsp;&nbsp;
                    <Button as={Link} to="post/edit" icon positive>
                        <Icon name='pencil alternate'/>
                        &nbsp;New Post
                    </Button>
                </div>
            </div>

            table
        </div>
    )
}
