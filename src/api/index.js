import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',

  },
  headers: {
    'X-RapidAPI-Key': '8bde6bbfd9msh7b327765db5ae1cp16e82ejsn9456d8782d2c',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



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
              'X-RapidAPI-Key': 'a2501dc083mshfb106906a622dc6p19dfa7jsn28a4970c61f0',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
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