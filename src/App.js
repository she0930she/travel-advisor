import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


function App() {
  const [ places, setPlaces ] = useState([]);

  const [ coordinates, setCoordinates ] = useState({});
  const [ bounds, setBounds ] = useState({});
  const [ childClicked, setChildClicked ] = useState(null);

  // get user coordinates from chrome browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})

    })
  }, [])


  // fetch data from rapid API call and update the DOM
  useEffect(() => {
    //console.log(coordinates, bounds)

    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log("data from api call: ", data);

        setPlaces(data);
      })
  }, [coordinates, bounds]);



  return (
    <div >
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={places}
            childClicked={childClicked}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates = {setCoordinates}
            setBounds = {setBounds}
            coordinates = {coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
