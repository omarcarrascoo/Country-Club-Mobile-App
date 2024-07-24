import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import ListBookingSports from '../../../../components/sports/list-booking-sports/list-booking-sports';
import { SportsSpacesListStore } from '../../../../constants/bookings-store';
import { getSports } from '../../../../redux/sportsRedux';
import ClubContext from '../../../../context/context';

const BookingSports: FC<any> = (props) => {
  const [sports, setSports] = useState([])
  const { onLoading } = useContext(ClubContext);
  useEffect(()=>{
    onLoading(true);
    const setAllSportsData = async () =>{
      const sportsData:any = await getSports()
      await setSports(sportsData)
      onLoading(false);
    }
    setAllSportsData()
  }, [])

  
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <ListBookingSports
            events={sports}
            white
            {...props}
            title={'Reserva un espacio deportivo'}
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default BookingSports;
