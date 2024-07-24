import { generalScreenOptions } from '../utils';
import Home from '../../../screens/home/home';

const OptionsStackConfig = [
  {
    title: 'Interfaz',
    routeName: 'Interface',
    component: Home,
    screenOptions: generalScreenOptions('Interfaz'),
    icon: {
      name: 'yelp',
      family: 'entypo'
    },
    navigation: {
      stack: 'App',
      screen: 'HomeStack'
    }
  }
];

export default OptionsStackConfig;
