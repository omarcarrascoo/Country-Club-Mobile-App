import { generalScreenOptions } from '../utils';
import Home from '../../../screens/home/home';
import Directorio from "../../../screens/account/screens/information/directorio/directorio";
import Horario from "../../../screens/account/screens/information/horario/horario";

const InformationStackConfig = [
  {
    title: 'Directorio',
    routeName: 'Directorio',
    component: Directorio,
    screenOptions: generalScreenOptions('Directorio'),
    icon: {
      name: 'address-card-o',
      family: 'Font-Awesome'
    },
    navigation: {
      stack: 'InformationStack',
      screen: 'Directorio'
    }
  },
  {
    title: 'Horarios',
    routeName: 'Horario',
    component: Horario,
    screenOptions: generalScreenOptions('Horarios'),
    icon: {
      name: 'clock',
      family: 'entypo'
    },
    navigation: {
      stack: 'InformationStack',
      screen: 'Horario'
    }
  }
];

export default InformationStackConfig;
