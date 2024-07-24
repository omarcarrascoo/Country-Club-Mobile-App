import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getMedia = async () => {
    console.log("====================FETCH EN Get Media APP====================");
    
    try {
        const userToken = await getTokenFromStorage()
        let navigationsMedia = {
            stack: 'HomeStack',
            screen: 'EventDetail'
        };
        const res = await axios.get(`${BASE_URL}report/MediaApp`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data:any = res.data.data
        const datanavigation: any[] = data.map((obj: any) => {
          return { ...obj, navigation: navigationsMedia };
        });
        const filteredEvents = datanavigation.filter(event => event.Statud === "Activo");
        return (filteredEvents)
      } catch (error) {
        console.log("Va a error");
        
        console.log(error);
        return error
      }
}

export const sportReservations = async () => {
  console.log("====================FETCH EN sportReservations=========================");
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/All_Reservas`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data:any = res.data.data

        
        return (data)
      } catch (error) {
        console.log("Va a error");
        console.log(error);
        return error
      }
}
export function getMediaByCategory(categoryName:any, listOfMedia:any) {  
  const matchingMedia = [];  
  
  for (let i = 0; i < listOfMedia.length; i++) {
      if (listOfMedia[i].Cate.display_value === categoryName) {
          matchingMedia.push(listOfMedia[i]);
      }
  }
  return matchingMedia; 
}

export const getMediaFavs = (favList: any, listOfMedia: any) => {
  const favoritesMedia = favList.map((obj: any) => {
    const categoryName = obj.display_value;
    const mediaDetails = getMediaByCategory(categoryName, listOfMedia);

    return mediaDetails.length > 0 ? [...mediaDetails] : null; // Return an array of all matching media
  });

  return favoritesMedia.filter((media: any) => media !== null).flat(); // Flatten the array
};

export const getEvents = async () => {
  console.log("====================FETCH EN Get ReservasClub_Report====================");
  
  try {
      const userToken = await getTokenFromStorage()
      let navigationsMedia = {
          stack: 'HomeStack',
          screen: 'EventDetail'
      };
      const res = await axios.get(`${BASE_URL}report/ReservasClub_Report`,{
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data      
      const datanavigation: any[] = data.map((obj: any) => {
        return { ...obj, navigation: navigationsMedia };
      });
      return (datanavigation)
    } catch (error) {
      console.log(error);
      return error
    }
}
export const getResevasClub = async () => {
  console.log("====================FETCH EN Get ReservasClub_Report===================");
  
  try {
      const userToken = await getTokenFromStorage()
      let navigationsMedia = {
          stack: 'HomeStack',
          screen: 'EventDetail'
      };
      const res = await axios.get(`${BASE_URL}report/ReservasClub_Report`,{
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data
      const datanavigation: any[] = data.map((obj: any) => {
        return { ...obj, navigation: navigationsMedia };
      });
      return (datanavigation)
    } catch (error) {
      console.log(error);
      return error
    }
}

export const registerEvent = async (data:any) =>{
  console.log("-----------------Hit en Post Register Eventos ----------");
  try {
    
      const userToken = await getTokenFromStorage();
      const res = await axios.post(
          `${BASE_URL}form/Eventos`,
          {...data},
          {
              headers: {
              Authorization: `Zoho-oauthtoken ${userToken}`
              },
          })
          
          return (res)
  } catch (error) {
      console.log('Error in registerInvitado: ' +error);
      return error
  }
}

export const reserveEventClub = async (data:any) =>{
  console.log("-----------------Hit en Post ReservasClub ----------");
  try {
    
      const userToken = await getTokenFromStorage();
      const res = await axios.post(
          `${BASE_URL}form/ReservasClub`,
          {...data},
          {
              headers: {
              Authorization: `Zoho-oauthtoken ${userToken}`
              },
          })
          
          return (res)
  } catch (error) {
      console.log('Error in registerInvitado: ' +error);
      return error
  }
}