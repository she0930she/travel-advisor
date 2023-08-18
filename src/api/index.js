import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (type, sw, ne) =>{
    //console.log("sw, ne", sw, ne)
    var URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    // if (type === "hotels"){
    //   URL = 'https://travel-advisor.p.rapidapi.com/hotels/list';
    // }
    try{
        const response = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
            headers: {
              'X-RapidAPI-Key': 'YOU NEED TO ADD KEY',
              'X-RapidAPI-Host': 'YOU NEED TO ADD HOST'
              }
        })
        const { data: { data }} = response;
        // console.log("response: ",response)
        // console.log("data: ",data)

        return data;
    } catch (error){
        console.error(error);
    }

}

// export default getPlacesData;