import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) =>{
    //console.log("sw, ne", sw, ne)
    try{
        const response = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
            headers: {

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