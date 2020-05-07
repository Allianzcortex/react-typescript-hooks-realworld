import styled from "styled-components";
import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Grid,
    Paper,
    Container,
    Chip,
    Divider
} from "@material-ui/core";
import {TreeView,TreeItem,Pagination } from "@material-ui/lab";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

// 注销：Sign Out
// 注册 Sign Up
// 登录 Sign In

const HeaderBar = styled.div`
    
    header {
    flex-direction: row;
    justify-content: space-between;
    }

    .MuiTypography-root {
        margin-left:10px;
        }
        .test-button {
          
        }
        
        a:hover {
        color:black;
        }
      
        .main-container {
          background:white;
          
        }
`

const MainContentBar = styled.div`

h4 {
    margin-bottom: 12 px;
    border: 1px solid;
}

 .MuiPaper-root {
      margin:16px;
 }
 .MuiContainer-root {
 margin:auto;
 }
 
 .MuiChip-root {
 margin:8px;
 font-weight: bold;
 font-size:14px
 }
 
 .MuiCard-root {
 box-shadow: none;
 }
 
 .MuiPagination-root {
    margin:0 auto;
 }
`

const Header = (props) => {

    const currentUser = useSelector(state => state.getIn(['auth', 'currentUserName']))

    useEffect(() => {
        console.log('header loaded')
    }, [])

    return (
        <Fragment>

            {/* header*/}
            <HeaderBar>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            News
                        </Typography>

                    </Toolbar>
                    <Button href="/text" className="test-button" color="inherit">
                        Login</Button>
                </AppBar>
            </HeaderBar>

            {/*    main content*/}
            <MainContentBar>
                <Container>
                    <Grid container direction="row">
                        <Grid item sm={12} md={9}>
                            <Paper>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            be never a talent
                                        </Typography>
                                        <Typography>
                                            It was a big week here at DH HQ. We overhauled our already great platform to make it even more robust and launched the new product last Tuesday. This also coincided with a major app update, where we introduced a pretty epic feature called Story Studio.

                                            The Dash Hudson Story Studio is a series of rad templates for brands to build their Instagram Stories and craft an even more compelling narrative with their vertical videos,
                                            including when producing ads in the format. The tool lives in the new Dash Hudson app, where our product team made sure every single feature was interconnected for an absolutely seamless user experience.
                                        </Typography>
                                        Click to read more ...
                                    </CardContent>
                                </Card>

                                <Divider/>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            be never a talent
                                        </Typography>
                                        <Typography>
                                            It was a big week here at DH HQ. We overhauled our already great platform to make it even more robust and launched the new product last Tuesday. This also coincided with a major app update, where we introduced a pretty epic feature called Story Studio.

                                            The Dash Hudson Story Studio is a series of rad templates for brands to build their Instagram Stories and craft an even more compelling narrative with their vertical videos,
                                            including when producing ads in the format. The tool lives in the new Dash Hudson app, where our product team made sure every single feature was interconnected for an absolutely seamless user experience.
                                        </Typography>
                                        Click to read more ...
                                    </CardContent>
                                </Card>

                            </Paper>

                            <Pagination count={10} variant="outlined" shape="rounded" />

                        </Grid>

                        <Grid item sm={12} md={3} container direction="column">
                            <Paper item>
                                Pupular Tags
                                <Chip label="bbbbasfd" clickable/>
                                <Chip label="asdfffffffff"/>
                                <Chip label="aaaadsf"/>
                                <Chip label="asdfffewfqwefq"/>
                                <Chip label="cccccc"/>
                            </Paper>
                            <Paper item>
                                <h4>Select Category</h4>
                                <Divider/>
                                <TreeView
                                    defaultCollapseIcon={<ExpandMoreIcon/>}
                                    defaultExpandIcon={<ChevronRightIcon/>}>
                                    <TreeItem nodeId="1" label="Applications">
                                        <TreeItem nodeId="2" label="Calendar"/>
                                        <TreeItem nodeId="3" label="Chrome"/>
                                        <TreeItem nodeId="4" label="Webstorm"/>
                                    </TreeItem>
                                    <TreeItem nodeId="5" label="Applications">
                                        <TreeItem nodeId="6" label="Calendar"/>
                                        <TreeItem nodeId="7" label="Chrome"/>
                                        <TreeItem nodeId="8" label="Webstorm"/>
                                    </TreeItem>
                                </TreeView>
                            </Paper>
                        </Grid>


                    </Grid>
                </Container>
            </MainContentBar>


        </Fragment>
    )
}

export default Header;
