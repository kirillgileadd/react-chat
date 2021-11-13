import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState} from "react-firebase-hooks/auth";


firebase.initializeApp(
    {
        apiKey: "AIzaSyCPU6YmtRokl_MWlE7PrMv903uUiMEj_WU",
        authDomain: "react-chat-2cf40.firebaseapp.com",
        projectId: "react-chat-2cf40",
        storageBucket: "react-chat-2cf40.appspot.com",
        messagingSenderId: "968507420132",
        appId: "1:968507420132:web:3c1827ba022e6c0d5cabf1",
        measurementId: "G-JHWWFK2YMC"
    }
);

// Initialize Firebase


const firestore = firebase.firestore()
const auth = firebase.auth()

export const AppContext = createContext()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContext.Provider value={{
                firebase,
                auth,
                firestore,
            }}>
                <App/>
            </AppContext.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
