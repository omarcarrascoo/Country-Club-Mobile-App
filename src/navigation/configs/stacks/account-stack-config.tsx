import { generalScreenOptions } from '../utils';
import Account from '../../../screens/account/account';
import NewPaymentMethod from '../../../screens/account/screens/payment/new-payment-method';
import ChangePassword from '../../../screens/account/screens/change-password/change-password';
import PaymentMethods from '../../../screens/account/screens/payment-methods/payment-methods';
import Membership from "../../../screens/membership/membership";
import InterestsDetail from '../../../screens/account/screens/interests/interests';
import InterestSports from '../../../screens/account/screens/interests-sports/interests-sports';

const AccountStackConfig = [
  {
    title: 'Membresia',
    routeName: 'Membership',
    hideItem: true,
    component: Membership,
    screenOptions: generalScreenOptions('Membresia')
    
  },
  {
    title: 'Mi cuenta',
    routeName: 'Account',
    hideItem: true,
    component: Account,
    screenOptions: generalScreenOptions('Mi cuenta')
  },
  {
    title: 'Contraseña',
    routeName: 'ChangePassword',
    hideItem: true,
    component: ChangePassword,
    screenOptions: generalScreenOptions('Contraseña')
  },
  {
    title: 'Metodos de pago',
    routeName: 'PaymentMethods',
    hideItem: true,
    component: PaymentMethods,
    screenOptions: generalScreenOptions('Metodos de pago')
  },
  {
    title: 'Nueva tarjeta',
    routeName: 'NewPaymentMethod',
    hideItem: true,
    component: NewPaymentMethod,
    screenOptions: generalScreenOptions('Nueva tarjeta')
  },
  {
    title: 'Intereses',
    routeName: 'Interests',
    hideItem: true,
    component: InterestsDetail,
    screenOptions: generalScreenOptions('Intereses')
  },
  {
    title: 'Deportes Favorito',
    routeName: 'sportFav',
    hideItem: true,
    component: InterestSports,
    screenOptions: generalScreenOptions('Deportes Favoritos')
  }
];

export default AccountStackConfig;
