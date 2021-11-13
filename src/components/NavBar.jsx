import React, {useContext} from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {AppContext} from "../index";
import {LOGIN_ROUTE} from "../untils/const";
import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

const NavBar = () => {
    const {auth} = useContext(AppContext)
    const [user] = useAuthState(auth)

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography sx={{fontWeight: 800, flexGrow: 1}} variant="h6" color="inherit" component="div">
                        REACT CHAT
                    </Typography>
                    {user ?
                        (<Button color='inherit' onClick={() => auth.signOut()}>Sign OUT</Button>)
                        :
                        (
                            <Link style={{color: 'inherit', textDecoration: "none"}} to={LOGIN_ROUTE}>
                                <Button color='inherit'>Login IN</Button>
                            </Link>
                        )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;