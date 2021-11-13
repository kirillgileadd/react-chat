import './App.css';
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import {Box, Container, Grid} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from './components/Loader'

function App() {

    const {auth} = useContext(AppContext)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return (
                <Loader/>
        )
    }

    return (
        <>
            <NavBar/>
            <Grid container>
                <AppRoutes/>
            </Grid>
        </>
    )
}

export default App;
