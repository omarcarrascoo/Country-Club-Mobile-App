import Events from '../../../screens/events/events';
import {
  generalScreenOptions,
  previewScreenOptions
} from '../utils';
import ExploreEvents from '../../../screens/events/screens/explore-events/explore-events';
import HistoryEvents from '../../../screens/events/screens/history-events/history-events';
import EventDetail from '../../../screens/events/screens/event-detail/event-detail';
import EventReservation from '../../../screens/events/screens/event-reservation/event-reservation';
import CreateEvent from '../../../screens/events/screens/create-event/create-event';

const EventStackConfig = [
  {
    title: 'Eventos',
    routeName: 'Events',
    component: Events,
    screenOptions: generalScreenOptions('Eventos'),
    icon: {
      name: 'calendar',
      family: 'Font-Awesome'
    },
    navigation: {
      stack: 'HomeStack',
      screen: 'Events'
    }
  },
  {
    title: 'Explorar eventos',
    routeName: 'ExploreEvents',
    hideItem: true,
    component: ExploreEvents,
    screenOptions: generalScreenOptions('Explorar eventos')
  },
  {
    title: 'Historial de eventos',
    routeName: 'HistoryEvents',
    hideItem: true,
    component: HistoryEvents,
    screenOptions: generalScreenOptions(
      'Historial de eventos'
    )
  },
  {
    title: 'Detalle de evento',
    routeName: 'EventDetail',
    hideItem: true,
    component: EventDetail,
    screenOptions: previewScreenOptions()
  },
  {
    title: 'Reservar evento',
    routeName: 'EventReservation',
    hideItem: true,
    component: EventReservation,
    screenOptions: generalScreenOptions('Reservar evento')
  },
  {
    title: 'Crear evento',
    routeName: 'EventCreate',
    hideItem: true,
    component: CreateEvent,
    screenOptions: generalScreenOptions('Crear evento')
  }
];

export default EventStackConfig;
