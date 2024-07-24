import { generalScreenOptions } from '../utils';
import Credits from '../../../screens/credits/credits';
import AssignCredit from '../../../screens/credits/screens/assign-credit/assign-credit';

const CreditsStackConfig = [
  {
    title: 'Creditos',
    routeName: 'Credits',
    component: Credits,
    screenOptions: generalScreenOptions('Creditos'),
    icon: {
      name: 'credit',
      family: 'entypo'
    },
    navigation: {
      stack: 'HomeStack',
      screen: 'Credits'
    }
  },
  {
    title: 'Asignar Credito',
    routeName: 'AssignCredit',
    hideItem: true,
    component: AssignCredit,
    screenOptions: generalScreenOptions('Asignar Credito')
  }
];

export default CreditsStackConfig;
