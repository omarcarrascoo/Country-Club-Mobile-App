import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";


export const getAllHijos = async () => {
    console.log("============================HIT EN GET HIJOS REPORT============================");
    try {
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/HijosApp`, {
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data
        return(data)

      
      
    } catch (error) {
      console.log(error);
      return error
    }
};
export const getHijoByID = async (id:any) => {
    console.log("============================HIT EN GET HIJOS REPORT============================");
    try {
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/HijosApp/${id}`, {
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data
        return(data)

      
      
    } catch (error) {
      console.log(error);
      return null
    }
};
