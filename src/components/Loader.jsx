import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";

function CircularIndeterminate() {
    return (
        <Grid item xs={12} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
             height='100vh'
             display='flex'
        >
            <CircularProgress />
        </Grid>
    );
}

export default CircularIndeterminate