import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getDirectory = async () => {
    console.log("====================FETCH EN Get Directorio Report====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Directorio_Report`,{
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

export const getNotifications = async () => {
  console.log("====================FETCH EN Get All_Noticias_Homes Report====================");
  
  try {
      const userToken = await getTokenFromStorage()
      const res = await axios.get(`${BASE_URL}report/All_Noticias_Homes`,{
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
export const getNoticias1 = async () => {
  console.log("====================FETCH EN Get Noticias1====================");
  try {
      const userToken = await getTokenFromStorage()
      const res = await axios.get(`${BASE_URL}report/Noticias1`,{
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

export const getPlacesInfo = async () => {
  console.log("====================FETCH EN Get LugaresDomicilio_Report Report====================");
  
  try {
      const userToken = await getTokenFromStorage()
      const res = await axios.get(`${BASE_URL}report/LugaresDomicilio_Report`,{
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

export const getClubIntereses = async () => {
  console.log("====================FETCH EN Get Intereses_Report====================");
  
  try {
      const userToken = await getTokenFromStorage()
      const res = await axios.get(`${BASE_URL}report/Intereses_Report`,{
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
