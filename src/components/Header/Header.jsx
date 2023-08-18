import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./header.css";

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar style={{position: "static"}}>
            {/* <Toolbar className="toolbar"> */}
            <Toolbar style={{display: 'flex', "justifyContent": 'space-between'}} >
                <Typography variant="h5" >
                    Travel Advisor
                </Typography>
                <Box style={{display:"flex"}}>
                <Typography variant="h6" className="title">
                    Explore new places
                </Typography>  
                {/* <Autocomplete> */}
                    {/* <div className="search"> */}
                    <div position= 'relative'>
                        <div style={{position: 'relative'}}>
                            <SearchIcon position= 'absolute' justifycontent= 'center'/>
                        </div>
                        <InputBase placeholder="Search..." />
                    </div>
                {/* </Autocomplete> */}


                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;