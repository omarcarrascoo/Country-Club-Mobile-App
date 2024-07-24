import React, { FC } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import ListEventsSection from '../../../../components/events/list-events/list-events';
import { EventsListStore } from '../../../../constants';

const ExploreEvents: FC<any> = (props) => {
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <ListEventsSection
            events={EventsListStore}
            white
            {...props}
            title={'Explora eventos de tu club'}
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default ExploreEvents;
