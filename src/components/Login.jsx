import React, {useContext} from 'react';
import {Box, Button, Divider, Grid, Paper, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {AppContext} from "../index";
import firebase from "firebase/compat";

const Login = () => {
    const {auth} = useContext(AppContext)

    const login = async () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Grid item xs={12} sx={{display: "flex", justifyContent: 'center'}}>
            <Box sx={{width: 400, mt: 12, textAlign: "center"}}>
                <Paper sx={{p: 4}}>
                    <Typography variant='h4' fontWeight="bold">
                        REACT CHAT
                    </Typography>
                    <Typography fontWeight="bold" color='gray' sx={{mb: 1}}>
                        Login in to chat with your friends.
                    </Typography>
                    <Divider sx={{mb: 4}}/>
                    <Button startIcon={<GoogleIcon/>} onClick={login} variant='contained'>Login in with Google</Button>
                </Paper>
            </Box>
        </Grid>
    );
};

export default Login;