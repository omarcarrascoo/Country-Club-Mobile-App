import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClubContext from "../context/context";
import { useContext } from "react";
import { getTokenFromStorage } from "./setToken";

export const BASE_URL = "https://creator.zoho.com/api/v2/elecantoclubapp/democlubembers/";
const TOKEN_URL = 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.ec71db256726511598e8e9e9be50b8a4.f1ba4fac91aec5908865bcdd5ea1840f&client_id=1000.WJZGNOPYALROZ4XLSSECU8M50AAP6N&client_secret=d13fd537190033e844d5d652e211fb91ddaa816da6&grant_type=refresh_token&='

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const tokenRequest = axios.create({
  baseURL: TOKEN_URL,
  headers: { 
    refresh_token: '1000.ec71db256726511598e8e9e9be50b8a4.f1ba4fac91aec5908865bcdd5ea1840f',
    client_id: '1000.WJZGNOPYALROZ4XLSSECU8M50AAP6N',
    client_secret: 'd13fd537190033e844d5d652e211fb91ddaa816da6',
    grant_type: 'refresh_token'
  },
});

const headers = ()=>{
  const { state } = useContext(ClubContext);
  const headers = state.auth.Authorization
  return(headers)
}

export const tokenAuth:any = async () => {
  try {
    const token = await AsyncStorage.getItem('Authorization');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    throw error;
  }
};
const NewToken = tokenAuth()

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Zoho-oauthtoken ${NewToken}` },
});

