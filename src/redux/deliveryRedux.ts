import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";


export const postOrder = async (data:any) =>{
    console.log("-----------------Hit en Post Orden_a_Domicilio ----------");
    try {
      
        const userToken = await getTokenFromStorage();
        const res = await axios.post(
            `${BASE_URL}form/Orden_a_Domicilio`,
            {...data},
            {
                headers: {
                Authorization: `Zoho-oauthtoken ${userToken}`
                },
            })
            console.log(res);
            
            return (res)
    } catch (error) {
        
        console.log('Error in ordern_a_domicilio: ' +error);
        return error
    }
}