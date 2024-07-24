import { StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

export type ScreenGeneralProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList
> = StackScreenProps<ParamList, RouteName>;

export type FamilyType =
  | 'Ionicon'
  | 'entypo'
  | 'antdesign'
  | 'ArgonExtra'
  | 'Font-Awesome'
  | 'Galio'
  | 'Feather';

export type IconFamilyType =
  | 'Galio'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons';
