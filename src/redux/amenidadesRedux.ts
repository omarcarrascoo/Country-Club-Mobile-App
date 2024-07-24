import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getAmenidadesReport = async () => {
    console.log("====================FETCH EN Get Amenidade Report====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Amenidades_Report`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data:any = res.data.data
        return (data)
      } catch (error) {
        console.log("Va a error")
        console.log(error);
        return error
      }
}

export async function getAmenidadById(id:any) {
  console.log("====================FETCH EN Amenidades_Report====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Amenidades_Report/${id}`,{
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