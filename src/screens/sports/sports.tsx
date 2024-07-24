import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import NextBookings from '../../components/sports/next-bookings/next-bookings';
import PreferenceBookings from '../../components/sports/preference-bookings/preference-bookings';
import SpaceBookings from '../../components/sports/space-bookings/space-bookings';
import SportsEvents from '../../components/sports/sports-events/sports-events';
import { getSportFavorites, getSports, getTournaments } from '../../redux/sportsRedux';
import ClubContext from '../../context/context';
import { getReservas } from '../../redux/reservasRedux';
import { filterDataByCorreo } from '../../services/utils';

const Sports: FC<any> = (props) => {
  const [sports, setSports] = useState([])
  const [tournamentEvents, setTounaments] = useState([])
  const [sportFavs, setSportFavs] = useState([])
  const [reservas, setReservas] = useState()
  const { onLoading, state } = useContext(ClubContext);
  const [reload, setReload] = useState(false)

  const setAllSportsData = async () =>{
    const sportsData:any = await getSports()
    const tournamentsData:any = await getTournaments()
    const reservationData:any = await getReservas()
    const resReservFiltered = filterDataByCorreo(state.auth.Correo_Electronico, reservationData)
    await setReservas(resReservFiltered.reverse())
    await setSports(sportsData)
    await setTounaments(tournamentsData)
    const userPreferences:any= state.user.Deportes
    const favourites:any = await getSportFavorites(userPreferences,sportsData)
    await setSportFavs(favourites)
    onLoading(false);
  }
  useEffect(()=>{
    onLoading(true);
    setAllSportsData()
  }, [])
  useEffect(()=>{
    setAllSportsData()
  }, [reload])
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <NextBookings
            reloadAction={setReload}
            events={reservas}
            title={'Mis reservas deportivas'}
            {...props}
            white
          />

          <PreferenceBookings
            events={sportFavs}
            white
            {...props}
            title={'Basado en tus preferencias'}
          />

          <SpaceBookings list={sports}  title={'Reserva pistas y canchas'} {...props} white />

          <SportsEvents
            events={tournamentEvents}
            white
            {...props}
            title={'Torneos y eventos deportivos'}
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default Sports;
