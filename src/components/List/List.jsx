import React from 'react';
import { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

// import useStyles from './styles';
import { useTheme } from '@mui/material/styles';



const List = ({ places, childClicked }) => {
    // const classes = useStyles();
    const theme = useTheme();
    const [ type, setType ] = useState('restaurants');
    const [ rating, setRating ] = useState('');

    // const places = [
    //     {name: "cool place"},
    //     {name: "best beer"},
    //     {name: "best steak"},
    //     {name: "cool place"},
    //     {name: "best beer"},
    //     {name: "best steak"},
    //     {name: "cool place"},
    //     {name: "best beer"},
    //     {name: "best steak"},
    // ]


    return (
        <div style={{padding: '25px'}}>
        <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            <FormControl style={{ margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'}}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={ (e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
        </FormControl>
        <FormControl style={{ margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'}}>
            <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={ (e) => setRating(e.target.value)}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
        </FormControl>
        <Grid container spacing={3} style={{height: '75vh', overflow: 'auto'}}  >
            {places?.map((place, i) =>(
                <Grid item key={i} xs={12}>
                    <PlaceDetails place={place}/>
                </Grid>
            ))}
        </Grid>
        </div>
    );
}

export default List;