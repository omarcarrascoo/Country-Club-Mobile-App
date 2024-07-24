import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";
import { convertDateString } from "../services/utils";


export const registerInvitado = async (data:any) =>{
    console.log("-----------------Hit en Post Register Invitado ----------");
    try {
      
        const userToken = await getTokenFromStorage();
        const res = await axios.post(
            `${BASE_URL}form/Registrar_Invitado`,
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

export const getInvitados = async () => {
    console.log("============================HIT EN GET INVITADOS REPORT============================");
    let navigationVisits = {
      stack: 'CreateInvitationRapid',
      screen: 'CreateInvitationRapid'
    };
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;    
    try {
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/Registrar_Invitado_Report`, {
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data
      if (data.length === 1) {
        const obj = { ...data[0], navigation: navigationVisits };
        return [obj]; 
      }else{
        const datanavigation: any[] = data.map((obj: any) => {
          return { ...obj, navigation: navigationVisits };
        });
        
        const filterArray = datanavigation.filter(item => {
          if (item.Fecha_Ingreso) {
            return convertDateString(item.Fecha_Ingreso) === formattedDate;
          }
          return false;
        });
        return(filterArray)
      }
    } catch (error) {
      console.log(error);
      return error
    }
};


export const getInvitadoById = async (id: string) => {
  console.log("============================HIT EN GET INVITADOS REPORT BY ID============================");
  let navigationVisits = {
    stack: 'CreateInvitationRapid',
    screen: 'CreateInvitationRapid'
  };
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.get(`${BASE_URL}report/Registrar_Invitado_Report/${id}`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${userToken}`
      },
    });

    const data: any = res.data.data;

    if (Array.isArray(data)) {
      if (data.length === 1) {
        const obj = { ...data[0], navigation: navigationVisits };
        return obj;
      }
      const datanavigation: any[] = data.map((obj: any) => {
        return { ...obj, navigation: navigationVisits };
      });
      return datanavigation;
    } else if (typeof data === 'object') {
      const obj = { ...data, navigation: navigationVisits };
      return obj;
    } else {
      throw new Error("Unexpected data type");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const filterInvitadoByFav = async () =>{
    try {
      let navigationVisits = {
        stack: 'CreateInvitationRapid',
        screen: 'CreateInvitationRapid'
      };
      const userToken = await getTokenFromStorage();
      const res = await axios.get(`${BASE_URL}report/Registrar_Invitado_Report`, {
        headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
        },
      });
      const data:any = res.data.data
      
      if (data.length === 1 && data[0].Favorito === true) {
        const obj = { ...data[0], navigation: navigationVisits };
        return [obj]; 
      }else{
        const datanavigation: any[] = data.map((obj: any) => {
          return { ...obj, navigation: navigationVisits };
        });
        
        const favFilter = datanavigation.filter((item:any) => item.Favorito === "true");
 
        return favFilter
      }
    } catch (error) {
      console.error(error)
      return error
    }
}
