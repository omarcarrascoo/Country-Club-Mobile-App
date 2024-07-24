import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getCreditHistory = async () => {
    console.log("====================FETCH EN Get Creditos Report====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Creditos_Report`,{
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
export const getAbonosHistory = async () => {
    console.log("====================FETCH EN Get RegistrarAbonoCredito_Report====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/RegistrarAbonoCredito_Report`,{
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


export const FilterUserCreditById = (userId:string, data:any) =>{
    
    try {
      let userData:any = data.filter((data:any) => data["Socios.ID"] === userId);
      return (userData)
  } catch (error) {
      console.log(error);
      return error
  }
}
export const FilterUserCreditByIdObject = (userId:string, data:any) =>{
    
    try {
      let userData:any = data.filter((data:any) => data.Socios.ID === userId);
      return (userData)
  } catch (error) {
      console.log(error);
      return error
  }
}

export const transferCredit = async (data:any) =>{
  console.log("-----------------Hit en Post TransferenciaDeSaldo ----------");
  try {   
      const userToken = await getTokenFromStorage();
      const res = await axios.post(
          `${BASE_URL}form/TransferenciaDeSaldo`,
          {...data},
          {
              headers: {
              Authorization: `Zoho-oauthtoken ${userToken}`
              },
          })
          console.log(res);
          
          return (res)
  } catch (error) {
      console.log('Error in registerInvitado: ' +error);
      return error
  }
}