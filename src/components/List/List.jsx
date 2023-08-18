import React from 'react';
import { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

// import useStyles from './styles';
import { useTheme } from '@mui/material/styles';



const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
    const theme = useTheme();

    const [ elRefs, setElRefs ] = useState([]);

    console.log({childClicked})
    // every time places changes, update useEffect()
    useEffect(() => {
        const refs = Array(places?.length).fill().map( (_, i) => elRefs[i] || createRef() );
        console.log("first: ", {elRefs})

        setElRefs(refs);
        console.log("second: ",{elRefs})
    }, [places]);

    

    return (
        <div style={{padding: '25px'}}>
        <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
        {isLoading? (
            <div style={{height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress size="5rem" />
            </div>
        ):(
            <>
            <FormControl style={{ margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'}}>
                <InputLabel id="type">Type</InputLabel>
                <Select id="type" value={type} onChange={ (e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    {/* <MenuItem value="hotels">Hotels</MenuItem> */}
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
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            selected={Number(childClicked) === i}
                            refProp={elRefs[i]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
        )}
        </div>
    );
}

export default List;