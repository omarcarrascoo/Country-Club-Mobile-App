import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getProducts = async () => {
    console.log("----------------------HIT EN GET PRODUCTS--++++++++++++++++++++");
    
    try {
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/MenuApp`, {
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
export const getProductbyId = async (id:string) => {
  console.log("----------------------HIT EN GET PRODUCTS--++++++++++++++++++++");
  
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.get(`${BASE_URL}report/MenuApp/${id}`, {
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
export const getProductsCategories = async () => {
  console.log("----------------------HIT EN GET CAtegorias Report--++++++++++++++++++++");
  
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.get(`${BASE_URL}report/Categorias_Report`, {
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