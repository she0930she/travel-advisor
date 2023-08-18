import React from 'react';
import { Box, Typography, Button, Card,CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';




const PlaceDetails = ({ place, selected, refProp }) => {

    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

    return (
        <div>
            <Card elevation={6}>
                <CardMedia 
                    style={{ height:350 }}
                    image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    title={place.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{place.name}</Typography>
                    <Box display="flex" justifyContent="space-between" my={2}>
                        <Rating name="read-only" value={Number(place.rating)} readOnly />
                        <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                    </Box>   
                    {place?.award?.map((award) => (
                        <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                            <img src={award.images.small} alt={award.display_name} />
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>
                    ))}  
                    {place?.cuisine?.map(({name}) => (
                        <Chip key={name} size="small" label={name} style={{margin: '5px 5px 5px 0'}} />
                    ))}   
                    {place?.address && (
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',}}>
                            <LocationOnOutlinedIcon />{place.address}
                        </Typography>
                    )} 
                    {place?.phone && (
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',}}>
                            <LocalPhoneOutlinedIcon />{place.phone}
                        </Typography>
                    )}   
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                            Trip Advisor
                        </Button>
                        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                            Website
                        </Button>
                    </CardActions>                                                                    
                </CardContent>
            </Card>
        </div>
    );
}

export default PlaceDetails;