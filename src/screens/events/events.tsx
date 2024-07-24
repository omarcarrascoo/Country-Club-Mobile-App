import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import NextEvents from '../../components/events/next-events/next-events';
import EventActions from '../../components/events/event-actions/event-actions';
import InterestsSection from '../../components/events/interests-section/interests-section';
import { getEvents, getMedia, getMediaFavs } from '../../redux/eventosRedux';
import ClubContext from '../../context/context';
import {filterDataByCorreo2 } from '../../services/utils';

const Events: FC<any> = (props) => {

  const [media, setMedia] = useState()
  const [reservas, setReservas] = useState()
  const [favMedia, setFavMedia] = useState()
  const { onLoading, state } = useContext(ClubContext);
  const [reload, setReload] = useState(false)

  const setAllMedia =async () => {
    const mediaData:any = await getMedia()
    setMedia(mediaData)
    // const reservationData:any = await getReservas()
    const reservationData:any = await getEvents()
    const resResFilter = filterDataByCorreo2(state.auth.Correo_Electronico, reservationData)
    setReservas(resResFilter)
    const userPreferences:any= state.user.Intereses
    try {
      const favourites:any = await getMediaFavs(userPreferences, mediaData)
      await setFavMedia(favourites)
    } catch (error) {
      console.log(error);  
    }
    onLoading(false)
  }
  useEffect(()=>{
    onLoading(true)
    setAllMedia()
  }, [])
  
  useEffect(()=>{
    setAllMedia()
  }, [reload])

  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <NextEvents
            reloadAction={()=>{
              setReload(!reload)
            }}
            events={reservas}
            title={'Tus eventos'}
            {...props}
            white
          />
          <EventActions
            {...props}
            white
            title={'Eventos'}
          />
          <InterestsSection
            events={favMedia}
            white
            {...props}
            title={'Basado en tus intereses'}
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default Events;
