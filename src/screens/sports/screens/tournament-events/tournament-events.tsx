import React, { FC } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import TournamentsListSection from '../../../../components/sports/tournaments-list/tournaments-list';
import { SportsEventsStore } from '../../../../constants/bookings-store';

const TournamentEvents: FC<any> = (props) => {
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <TournamentsListSection
            events={SportsEventsStore}
            white
            {...props}
            title={
              'Explora los torneos y eventos deportivos de tu club'
            }
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default TournamentEvents;
