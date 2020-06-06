import React, {FC, Fragment} from "react"
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './admin.css'
import {Link} from "react-router-dom";

export const AdminSidebar: FC<{}> = () => {
    return (
        <Fragment>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <Menu.Item as={Link} name='home' to='/admin/home'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as={Link} name='category' to='/admin/category'>
                    <Icon name='gamepad' />
                    Category
                </Menu.Item>
                <Menu.Item as={Link} name='post' to='/admin/post'>
                    <Icon size="large" name='camera' />
                    Post
                </Menu.Item>
            </Sidebar>

            {/*<Sidebar.Pusher>*/}
            {/*    <Segment basic>*/}
            {/*        <Header as='h3'>Application Content</Header>*/}
            {/*        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
            {/*    </Segment>*/}
            {/*</Sidebar.Pusher>*/}
        </Fragment>
    )
}
