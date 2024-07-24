import AsyncStorage from "@react-native-async-storage/async-storage";
import { tokenRequest } from "./requestMethods";


export const setTokenInStorage = async () => {
  try {
    const token:any = await tokenRequest.post('/')
    console.log(token.data.access_token);
    console.log("====================FETCH EN REFRESH TOKEN=================");
    await AsyncStorage.setItem('Authorization', token.data.access_token);
    console.log('Token stored successfully: '+ token.data.access_token);
    return(token)
  } catch (error) {
    console.error('Error storing token:', error);
    return(error)
  }
};
export const getTokenFromStorage = async () => {
    try {
      const token = await AsyncStorage.getItem('Authorization');
      
      // console.log('Retrieved token:', token);
  
      return token;
    } catch (error) {
      console.error('Error retrieving token:', error);
      throw error;
    }
  };

AsyncStorage