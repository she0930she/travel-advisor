import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./map.css";


import useStyles from './styles';


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    //const coordinates = { lat: 10.99835602, lng: 77.01502627 };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys = {{key: 'YOU NEED TO ADD KEY'}}
            defaultCenter = { coordinates }
            center = { coordinates }
            defaultZoom = { 14 }
            margin = { [50,50, 50, 50] }
            options = { '' }
            onChange = { (e) => {
                //console.log("e: ", e);

                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            } }
            onChildClick = { (child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        style={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },}}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <paper elevation={3} style={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px', background: 'white', boxShadow: ["0px", "7px", "29px", "0px"]}}>
                                    <Typography variant="subtitle2" gutterBottom> {place.name}</Typography>
                                    <img
                                        style={{cursor: 'pointer',}}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>


        </div>
    );
}

export default Map;