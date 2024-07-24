import { generalScreenOptions, previewScreenOptions } from '../utils';
import Sports from '../../../screens/sports/sports';
import BookingSports from '../../../screens/sports/screens/booking-sports/booking-sports';
import SportDetail from '../../../screens/sports/screens/sport-detail/sport-detail';
import TournamentEvents from '../../../screens/sports/screens/tournament-events/tournament-events';
import TournamentDetail from '../../../screens/sports/screens/tournament-detail/tournament-detail';
import TournamentInscription from '../../../screens/sports/screens/tournament-inscription/tournament-inscription';
import HistoryBookingSports from '../../../screens/sports/screens/history-booking-sports/history-booking-sports';

const SportsStackConfig = [
  {
    title: 'Deportes',
    routeName: 'Sports',
    component: Sports,
    screenOptions: generalScreenOptions('Deportes'),
    icon: {
      name: 'dribbble',
      family: 'entypo'
    },
    navigation: {
      stack: 'HomeStack',
      screen: 'Sports'
    }
  },
  {
    title: 'Reservar Espacios',
    routeName: 'BookingSports',
    hideItem: true,
    component: BookingSports,
    screenOptions: generalScreenOptions('Reservar Espacios')
  },
  {
    title: 'Detalle de deporte',
    routeName: 'SportDetail',
    hideItem: true,
    component: SportDetail,
    screenOptions: previewScreenOptions()
  },
  {
    title: 'Torneos y eventos',
    routeName: 'TournamentEvents',
    hideItem: true,
    component: TournamentEvents,
    screenOptions: generalScreenOptions('Torneos y eventos')
  },
  {
    title: 'Detalle de torneo',
    routeName: 'TournamentDetail',
    hideItem: true,
    component: TournamentDetail,
    screenOptions: previewScreenOptions()
  },
  {
    title: 'Pago de inscripcion',
    routeName: 'TournamentInscription',
    hideItem: true,
    component: TournamentInscription,
    screenOptions: generalScreenOptions('Inscripción y pago')
  },
  {
    title: 'Historial de reservas',
    routeName: 'HistoryBookingSports',
    hideItem: true,
    component: HistoryBookingSports,
    screenOptions: generalScreenOptions('Historial de reservas')
  }
];

export default SportsStackConfig;
