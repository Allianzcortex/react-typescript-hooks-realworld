import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled from "styled-components";

const AdminMainBar = styled.div`
  .MuiDrawer-paper {
  z-index: 1098;
  }
  
  .main-container {
  display: flex;
  }
`

export default function admin() {

    return (
        <React.Fragment>
            <AdminMainBar>
                <CssBaseline/>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className="main-container">
                    <Drawer variant="permanent" anchor="left">
                        <div>
                            <List>
                                {['xx', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem button key={text}>
                                        <br/>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Drawer>

                    <div>
                        <span>admin</span>
                    </div>
                </div>
                {/* End footer */}
            </AdminMainBar>
        </React.Fragment>
    );
}
