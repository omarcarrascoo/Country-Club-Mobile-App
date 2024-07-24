import { IDrawerStack } from '../../components/menu/vertical-menu/interface';
import Home from '../../screens/home/home';
import Header from '../../components/header/header';
import { ClubemberTheme } from '../../constants';
import React from 'react';
import EventStackConfig from './stacks/events-stack-config';
import { generalDrawerOptions, transparentScreenOptions } from './utils';
import SportsStackConfig from './stacks/sports-stack-config';
import AccountStackConfig from './stacks/account-stack-config';
import CreditsStackConfig from './stacks/credits-stack-config';
import InformationStackConfig from './stacks/information-stack-config';
import OptionsStackConfig from './stacks/options-stack-config';
import DeliveryStackConfig from "./stacks/delivery-stack-config";
import InvitadosStackConfig from "./stacks/invitados-stack-config";
import NotificationStackConfig from "./stacks/notification-stack-config";
import AyudaStackConfig from "./stacks/ayuda-stack-config";
import SuccessStackConfig from "./stacks/success-stack-config";

const appStackConfig: IDrawerStack = {
  stackName: 'AppStack',
  initialRouteName: 'HomeStack',
  screenOptions: generalDrawerOptions as any,
  sections: [
    {
      title: 'Home',
      hideItem: true,
      routeName: 'HomeStack',
      drawerOptions: {
        headerShown: false
      },
      childrenStack: {
        initialRouteName: 'Home',
        screenOptions: ({}) => ({
          mode: 'card',
          headerShown: true
        }),
        screens: [
          {
            title: 'Inicio',
            routeName: 'Home',
            hideItem: true,
            component: Home,
            screenOptions: transparentScreenOptions('Inicio')
          },
          ...(EventStackConfig as any),
          ...(SportsStackConfig as any),
          ...(CreditsStackConfig as any),
          ...(DeliveryStackConfig as any),
          ...(InvitadosStackConfig as any),
          ...(AyudaStackConfig as any),
          ...(SuccessStackConfig as any),
          ...(NotificationStackConfig as any),
        ]
      },
      icon: {
        name: 'home',
        family: 'entypo'
      },
      navigation: {
        stack: 'HomeStack',
        screen: 'Home'
      }
    },
    {
      title: 'Mi cuenta',
      routeName: 'AccountStack',
      drawerOptions: {
        headerShown: false
      },
      childrenStack: {
        initialRouteName: 'Account',
        screenOptions: ({}) => ({
          mode: 'card',
          headerShown: true
        }),
        screens: [...(AccountStackConfig as any)]
      },
      icon: {
        name: 'user',
        family: 'Font-Awesome'
      },
      navigation: {
        stack: 'AccountStack',
        screen: 'Account'
      }
    },
    {
      Dropdown:true,
      title: 'Información',
      routeName: 'InformationStack',
      drawerOptions: {
        headerShown: false
      },
      childrenStack: {
        initialRouteName: 'Directory',
        screenOptions: ({}) => ({
          mode: 'card',
          headerShown: true
        }),
        screens: [...(InformationStackConfig as any)]
      },
      icon: {
        name: 'info-with-circle',
        family: 'entypo'
      },
      navigation: {
        stack: 'HomeStack',
        screen: 'Home'
      }
    },
    // {
    //   Dropdown:true,
    //   title: 'Opciones',
    //   routeName: 'OptionsStack',
    //   drawerOptions: {
    //     headerShown: false
    //   },
    //   childrenStack: {
    //     initialRouteName: 'Interface',
    //     screenOptions: ({}) => ({
    //       mode: 'card',
    //       headerShown: true
    //     }),
    //     screens: [...(OptionsStackConfig as any)]
    //   },
    //   icon: {
    //     name: 'cog',
    //     family: 'entypo'
    //   },
    //   navigation: {
    //     stack: 'HomeStack',
    //     screen: 'Home'
    //   }
    // }
  ]
};

export default appStackConfig;