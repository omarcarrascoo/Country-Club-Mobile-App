import axios from "axios";
import { getTokenFromStorage } from "./setToken";
import { BASE_URL } from "./requestMethods";

export const makeLoginRequest = async (email:string, psw:string) => {
    console.log("============================HIT EN GET Login REPORT============================");
    try {
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/Login_Report`, {
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data

      const userFilter = data.filter(function (userData:any) {
        return userData.Clave === psw.toString() && userData.Correo_Electronico === email;
    });
    
      console.log(userFilter);
      
    return(userFilter)

      
      
    } catch (error) {
      console.log(error);
        return null
    }
};
export const setOneSignalToken = async (data:any, id:string) => {
  console.log("============================HIT EN GET Login REPORT============================");
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.patch(`${BASE_URL}report/Login_Report/${id}`,
    {...data}, 
    {
      headers: {
        Authorization: `Zoho-oauthtoken ${userToken}`
      },
    });
    return(res)
  } catch (error) {
    console.log(error);
    return null
  }
};

export const resetAccount = async (data:any) =>{
  console.log("-----------------Hit en Post Olvide_Clave ----------");
  console.log(data);
  
  try {
      const userToken = await getTokenFromStorage();
      const res = await axios.post(
          `${BASE_URL}form/Olvide_Clave`,
          {...data},
          {
              headers: {
              Authorization: `Zoho-oauthtoken ${userToken}`
              },
          })
          
          return (res)
  } catch (error) {
      console.error('Error in resetAcoount: ' +error);
      return error
  }
}