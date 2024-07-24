import React, { FC } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import { EventsListStore } from '../../../../constants';
import HistoryEventsSection from '../../../../components/events/history-events/history-events';

const HistoryEvents: FC<any> = (props) => {
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <HistoryEventsSection
            events={EventsListStore}
            white
            {...props}
            title={'Historial de eventos'}
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HistoryEvents;
