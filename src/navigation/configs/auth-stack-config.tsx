import { IChildrenStackScreen } from '../../components/menu/vertical-menu/interface';
import Login from '../../screens/auth/login/login';
import AccountRecovery from '../../screens/auth/account-recovery/account-recovery';
import OTPRecovery from "../../screens/auth/otp-recovery/otp-recovery";

import { generalScreenOptions, previewScreenOptions } from '../configs/utils'
import Signup from '../../screens/auth/signUp/signUp';

const authStackConfig: IChildrenStackScreen = {
  initialRouteName: 'Login',
  screenOptions: ({}) => ({
    mode: 'card',
    headerShown: false
  }),
  screens: [
    {
      title: 'Login',
      routeName: 'Login',
      hideItem: true,
      component: Login,
      screenOptions: {
        cardStyle: { backgroundColor: 'transparent' },
        headerTransparent: true
      }
    },
    {
      title: 'Registrarse',
      routeName: 'signup',
      hideItem: true,
      component: Signup,
      screenOptions: {
        cardStyle: { backgroundColor: 'transparent' },
        headerTransparent: true
      }
    },
    {
      title: 'Recuperar Cuenta',
      routeName: 'AccountRecovery',
      hideItem: true,
      component: AccountRecovery,
      // screenOptions: previewScreenOptions(),
      screenOptions: {
        cardStyle: { backgroundColor: 'transparent' },
        headerTransparent: true,
        
      },
      navigation: {
        stack: 'Auth',
        screen: 'OTPRecovery'
      }
    },
    {
      title: 'OTP Recovery',
      routeName: 'OTPRecovery',
      hideItem: true,
      component: OTPRecovery,
      screenOptions: {
        cardStyle: { backgroundColor: 'transparent' },
        headerTransparent: true
      }
    }
  ]
};

export default authStackConfig;
