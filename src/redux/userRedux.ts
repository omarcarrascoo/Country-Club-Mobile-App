import axios from "axios";
import { BASE_URL } from "./requestMethods";
import { getTokenFromStorage } from "./setToken";



export const registerUser = async (data:any) => {
  console.log("============================================Patch en Solicitar Acceso=================")
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.post(`${BASE_URL}form/Solicitar_Acceso`,
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
}

export const getUsers = async () => {
    console.log("====================FETCH EN MiembrosApp====================");
    try {
        const userToken = await getTokenFromStorage()
        let navigationsSports = {
          stack: 'HomeStack',
          screen: 'SportDetail'
        };
        const res = await axios.get(`${BASE_URL}report/MiembrosApp`,{
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
        console.log("Va a error");
        
        console.log(error);
        return error
      }
}
export const getHijos = async () => {
  console.log("====================FETCH EN Hijos====================");
  try {
      const userToken = await getTokenFromStorage()
      let navigationsSports = {
        stack: 'HomeStack',
        screen: 'SportDetail'
      };
      const res = await axios.get(`${BASE_URL}report/HijosApp`,{
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
      console.log("Va a error");
      
      console.log(error);
      return error
    }
}
export const filterUserByID =  (userList:any, id:any) =>{
    try {
        let user:any = userList.filter((user:any) => user.ID === id);
        return (user)
    } catch (error) {
        console.log(error);
        return error
    }
}
export const filterUserByEmail =  (userList:any, email:any) =>{
  try {
      let user:any = userList.filter((user:any) => user.correo === email);
      return (user)
  } catch (error) {
      console.log(error);
      return error
 
  }
}

export const patchUserById = async (data:any, id:string) =>{
  console.log("============================================Patch en MiembrosApp=================")
  console.log(data);
  
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.patch(`${BASE_URL}report/MiembrosApp/${id}`,
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
}
