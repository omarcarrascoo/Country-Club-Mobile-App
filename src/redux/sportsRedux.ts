import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getSports = async () => {
    console.log("====================FETCH EN getSports====================");
    
    try {
        const userToken = await getTokenFromStorage()
        let navigationsSports = {
          stack: 'HomeStack',
          screen: 'SportDetail'
        };
        const res = await axios.get(`${BASE_URL}report/DeportesApp`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data:any = res.data.data
        const datanavigation: any[] = data.map((obj: any) => {
          return { ...obj, navigation: navigationsSports };
        });
        return (datanavigation)
      } catch (error) {
        console.log("ERROR EN GETSPORTS");
        console.log(error);
        return error
      }
}
export const getTournaments = async () => {
    console.log("====================FETCH EN getTournaments=================");
    try {
        let navigationTournaments = {
          stack: 'HomeStack',
          screen: 'TournamentDetail'
        };
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/TorneosAPP`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data:any = res.data.data
        const datanavigation: any[] = data.map((obj: any) => {
          return { ...obj, navigation: navigationTournaments };
        });
        
        return (datanavigation)

      } catch (error) {
        console.log("ERROR EN GetTournaments");
        console.error(error);
        return error
      }
}
export const registerTournament = async (data:any) =>{
  console.log("====================Post EN RegistroTorneo=================");
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.post(
      `${BASE_URL}form/RegistroTorneo`,
      {...data},
      {
          headers: {
          Authorization: `Zoho-oauthtoken ${userToken}`
          },
      })
      console.log(res);
      
      return (res)

  } catch (error) {
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
        console.log("ERROR EN GETSPORTS");
        console.log(error);
        return error
      }
}
export function getSportById(id:any, listOfSports:any) {
  for (let i = 0; i < listOfSports.length; i++) {
      if (listOfSports[i].ID === id) {
          return listOfSports[i];
      }
  }
  return null; 
}
export async function getSportByIdFetch(id:any) {
  console.log("====================FETCH EN getSports====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/DeportesApp/${id}`,{
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

export const getSportFavorites = async (favList:any, listOfSports:any) => {
  const favouriteSports = favList.map((obj:any )=> {
    const idValue = obj.ID;
    const sportDetails = getSportById(idValue, listOfSports);

    return {...sportDetails};
  });
  return(favouriteSports)
}

export const createSportReservation= async(data:any)=>{
  console.log("-----------------Hit en Post Reservas_Deportivas ----------");
  try {
    
      const userToken = await getTokenFromStorage();
      const res = await axios.post(
          `${BASE_URL}form/Reservas_Deportivas`,
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