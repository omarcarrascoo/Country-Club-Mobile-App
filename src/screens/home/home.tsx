import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import { ScrollView } from 'react-native';
import { ScreenGeneralProps } from '../../interfaces/types';
import { EventsListStore } from '../../constants';
import NextEvents from '../../components/events/next-events/next-events';
import styles from './styles';
import InterestsSection from '../../components/events/interests-section/interests-section';
import DownMenu from '../../components/menu/down-menu/down-menu';
import ClubContext from '../../context/context';
import { getTokenFromStorage } from '../../redux/setToken';
import { getEvents, getMedia, getMediaFavs } from '../../redux/eventosRedux';
import { filterUserByEmail, filterUserByID, getHijos, getUsers } from '../../redux/userRedux';
import { getReservas } from '../../redux/reservasRedux';
import { filterDataByCorreo, filterDataByCorreo2, filterDataByUserId } from '../../services/utils';
// import OneSignal from 'react-native-onesignal';
import { setOneSignalToken } from '../../redux/loginRedux';

const Home: FC<ScreenGeneralProps<any, string>> = (
  props
) => {
  console.log("+++++++++++++++++RENDER HOME SCREEN+++++++++++++++++");
  const [media, setMedia] = useState()
  const [reservas, setReservas] = useState()
  const [favMedia, setFavMedia] = useState()
  const { updateAuthorization, state, onLoading, setUserData } = useContext(ClubContext);
  const [reload, setReload] = useState(false)

  // const oneSignalStatus = async () =>{
  // let externalUserId = state.user.ID;
  // OneSignal.setAppId("8198948d-9564-4e11-b455-4892fc6dabc0");

  // OneSignal.setExternalUserId(externalUserId, (results:any) => {
  //   console.log('Results of setting external user id');
  //   console.log(results);
  //   if (results.push && results.push.success) {
  //     console.log('Results of setting external user id push status:');
  //     console.log(results.push.success);
      
  //   }
  //   });
  //   const deviceState:any = await OneSignal.getDeviceState();
  //   const res = await setOneSignalToken({data: {Pull_ID: deviceState.userId}}, state.auth.ID)
  //   console.log(deviceState.userId);
  //   console.log(deviceState);
    
  //   console.log(res?.data.code);
  // }
  useEffect(() => {
    onLoading(true)
      const updateToken = async () => {
        const newToken: any = await getTokenFromStorage();
        const zohoToken = 'Zoho-oauthtoken ' + newToken;
        updateAuthorization(zohoToken);
      };
      const updateUser = async () => {
        try {
          if (state.auth.Rol === "Miembro") {
            const users = await getUsers();          
            const personalUser = filterUserByEmail(users, state.auth.Correo_Electronico);
            const userData:any = { ...personalUser[0] };
            await setUserData(userData);
          }
          else if (state.auth.Rol === "Hijo") {
            const users = await getHijos()
            const personalUser = filterUserByEmail(users, state.auth.Correo_Electronico)
            const userData:any = { ...personalUser[0] };
            await setUserData(userData);
          }
          else if(state.auth.Rol === "Conyuge"){
            const users = await getHijos()
            const personalUser = filterUserByEmail(users, state.auth.Correo_Electronico)
            const userData:any = { ...personalUser[0] };
            await setUserData(userData);
          }
        } catch (error) {
          console.error("Error updating user:", error);
        }
          
      }
    updateToken();
    updateUser()
    // oneSignalStatus()
  }, []);
    

  const setAllMedia =async () => {
    
    const mediaData:any = await getMedia()
    setMedia(mediaData)
    
    const reservationData:any = await getEvents()
    
    let resFiltered = filterDataByCorreo2(state.auth.Correo_Electronico, reservationData)
    console.log(resFiltered);
    
    setReservas(resFiltered)
    onLoading(false)
  }

  useEffect(()=>{
    setAllMedia()
  },[state.user])
  useEffect(()=>{
    setAllMedia()
  },[])

  useEffect(()=>{
    setAllMedia()
  },[reload])
  
  useEffect(()=>{

    const setFavourites = () => {
      try {
        const userPreferences:any = state.user.Intereses
        const favourites:any = getMediaFavs(userPreferences, media)
        setFavMedia(favourites)
      } catch (error) {
        console.error(error);
        
      }
    }
    setFavourites()
  },[media, reservas])

  return (
    <Block style={styles.container}>
      <Block center style={styles.home}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <NextEvents
            reloadAction={()=>{
              setReload(!reload)
            }}
            white
            {...props}
            title={'Tus próximos eventos'}
            events={reservas}
          />
          <InterestsSection
            white
            {...props}
            title={'Puede que te interese'}
            events={favMedia}
          />
        </ScrollView>
      </Block>

      <Block center>
        {/* DownMenu rendered outside ScrollView */}
        <DownMenu {...props} />
      </Block>
    </Block>
  );
};

export default Home;

