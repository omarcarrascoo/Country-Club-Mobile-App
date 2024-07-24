import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";

export const getReservas = async () => {
    console.log("====================FETCH EN Get ALL Reservas====================");
    
    try {
        const userToken = await getTokenFromStorage()
        let navigationsMedia = {
            stack: 'HomeStack',
            screen: 'EventDetail'
        };
        const res = await axios.get(`${BASE_URL}report/All_Reservas`,{
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
export const filterReservasbyUserId = async (id:string, reservasArray:any) =>{
    try {
        const reservasFiltradas = reservasArray.filter((reserva:any) => reserva.idUsuario === id);
        return reservasFiltradas;
    } catch (error) {
        console.error('Error al parsear el string de reservas:', error);
        return [];
    }
    
}
export const eliminarReserva = async (id:any) =>{
  console.log("====================FETCH EN delete ALL Reservas====================");
  try {
    const userToken = await getTokenFromStorage()
    const res = await axios.delete(`${BASE_URL}report/All_Reservas/${id}`,{
      headers: {
        Authorization: `Zoho-oauthtoken ${userToken}`
      },
    });
    const data:any = res.data.data    
    return (data)
  } catch (error) {
    console.log(error);
    return error
  }
}
