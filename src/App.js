import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


function App() {
  const [ places, setPlaces ] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [ type, setType ] = useState('restaurants');
  const [ rating, setRating ] = useState('');

  const [ coordinates, setCoordinates ] = useState({});
  const [ bounds, setBounds ] = useState({});
  const [ childClicked, setChildClicked ] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  

  // get user coordinates from chrome browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})

    })
  }, [])

  // update places in fileredPlaces when rating changes
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered)
  }, [rating])


  // fetch data from rapid API call and update the DOM
  useEffect(() => {
    //console.log(coordinates, bounds)
    // if (bounds.nw && bounds.sw){
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log("data from api call: ", data);

          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));

          setFilteredPlaces([]);
          setIsLoading(false);
        })
    // }
  }, [type, coordinates, bounds]);



  return (
    <div >
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={ filteredPlaces.length? filteredPlaces: places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates = {setCoordinates}
            setBounds = {setBounds}
            coordinates = {coordinates}
            places={ filteredPlaces.length? filteredPlaces: places }
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
