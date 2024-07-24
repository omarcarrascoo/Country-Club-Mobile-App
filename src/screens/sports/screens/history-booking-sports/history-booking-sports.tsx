import React, { FC } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import { BookingsListStore } from '../../../../constants/bookings-store';
import HistoryBookingSportsSection from '../../../../components/sports/history-booking-sports/history-booking-sports';

const HistoryBookingSports: FC<any> = (props) => {
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <HistoryBookingSportsSection
            events={BookingsListStore}
            white
            {...props}
            title={'Mis reservas'}
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HistoryBookingSports;
