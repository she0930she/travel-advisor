import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./header.css";

import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({lat, lng})
    }

    return (
        <AppBar style={{position: "static"}}>
            {/* <Toolbar className="toolbar"> */}
            <Toolbar style={{display: 'flex', "justifyContent": 'space-between'}} >
                <Typography variant="h5" >
                    Travel Advisor
                </Typography>
                <Box style={{display:"flex"}}>
                <Typography variant="h6" >
                    Explore new places
                </Typography>  
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                    {/* <div className="search"> */}
                    <div 
                        style={{
                            position: 'relative',
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: alpha(theme.palette.common.white, 0.15),
                            '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
                            marginRight: theme.spacing(2),
                            marginLeft: 0,
                            width: '100%',
                            [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
                        }}
                    >
                        <div style={{padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." />
                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;