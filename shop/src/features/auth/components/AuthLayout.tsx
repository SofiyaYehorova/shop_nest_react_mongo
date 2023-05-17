import {ReactNode} from "react";

import {Grid} from '@mui/material'

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <Grid sx={{p: 2}} container direction='column' justifyContent='flex-start' alignItems='center'>
           <img src="/logo-maker.png" alt="logo" height='40px'/>
            <main>{children}</main>
        </Grid>
    );
};

export {
    AuthLayout
};