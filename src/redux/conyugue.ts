import axios from "axios";
import { getTokenFromStorage } from "./setToken";
import { BASE_URL } from "./requestMethods";

export const getConyugById = async (id:any) => {
    console.log("============================HIT EN GET Conyugue REPORT============================");
    try {
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/ConyugueApp/${id}`, {
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