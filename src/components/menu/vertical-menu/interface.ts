import { FamilyType } from '../../../interfaces/types';
import {
  DrawerContentComponentProps,
  DrawerNavigationOptions
} from '@react-navigation/drawer';
import { FC } from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import {
  ParamListBase,
  RouteProp
} from '@react-navigation/native';

interface IMenuItem {
  title: string;
  routeName: string;
  icon?: {
    name: string;
    family: FamilyType;
  };
  navigation?: {
    stack: string;
    screen: string;
  };
  hideItem?: boolean;
}
export interface IStackMenuItem extends IMenuItem {
  screenOptions?:
    | StackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => StackNavigationOptions);
  component: FC<any>;
}

export interface IChildrenStackScreen {
  initialRouteName: string;
  screenOptions?:
    | StackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => StackNavigationOptions);
  screens: IStackMenuItem[];
}
export interface IDrawerMenuItem extends IMenuItem {
  drawerOptions?:
    | DrawerNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => DrawerNavigationOptions);
  childrenStack?: IChildrenStackScreen;
  component?: FC<any>;
  Dropdown?: boolean
}

export interface IDrawerStack {
  stackName: string;
  initialRouteName: string;
  screenOptions?:
    | DrawerNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => DrawerNavigationOptions);
  sections: IDrawerMenuItem[];
}
export interface IVerticalMenuItem {
  focused: boolean;
  item: IDrawerMenuItem;
  onPress?: () => void;
  handleExpand: (
    index: number,
    isExpanded: boolean
  ) => void;
  expandedLevels: number[];
  index: number;
  isSubItem?: boolean;
  expand?:boolean
}

export interface IVerticalMenu
  extends DrawerContentComponentProps {
  sections: IDrawerMenuItem[];
}
