import React, {useContext, useState} from 'react';
import {Avatar, Box, Button, Paper, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useAuthState} from "react-firebase-hooks/auth";
import {AppContext} from "../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Chat = () => {
    const {auth, firestore} = useContext(AppContext)
    const [user] = useAuthState(auth)
    const [inputValue, setInputValue] = useState()
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const handleInputChange = (e) => {
        const {value} = e.target
        setInputValue(value)
    }

    const sendMessage = () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: inputValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInputValue('')
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Box sx={{p: 3, width: "100%", backgroundColor: 'lightblue'}}>
            <Paper sx={{height: "70%", mb: 1, overflowY: "auto", p: 1, display: "flex", flexDirection: 'column'}}>
                {messages.map((message) =>
                    <Paper sx={{p: 1, mb: 1, display: "flex", width: 'fit-content',
                        backgroundColor: user && user.uid === message.uid ? 'lightgreen' : 'lightcyan',
                        marginLeft: user && user.uid === message.uid ? 'auto' : '10px'
                    }}>
                        <Avatar src={message.photoURL}/>
                        <div>
                            <Typography>{message.displayName}</Typography>
                            <Typography>{message.text}</Typography>
                        </div>
                    </Paper>
                )}
            </Paper>
            <Paper sx={{height: "13%"}}>
                <TextField sx={{width: "85%", height: "100%"}} value={inputValue} onChange={handleInputChange}
                           label='input message'/>
                <Button sx={{height: '100%', width: "15%"}} variant={'outlined'} onClick={sendMessage}
                        endIcon={<SendIcon/>}>Send</Button>
            </Paper>
        </Box>
    );
};

export default Chat;