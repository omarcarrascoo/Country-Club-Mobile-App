import {
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';
import ClubemberTheme from './clubember-theme';

export const { height: heightScreen, width: widthScreen } =
  Dimensions.get('screen');
export const { height: heightWindow, width: widthWindow } =
  Dimensions.get('window');
export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight =
  ClubemberTheme.SIZES.BASE * 3.5 + (StatusHeight || 0);

export const widthCard =
  (widthScreen -
    ClubemberTheme.SIZES.BASE_SECURE * 2 -
    ClubemberTheme.SIZES.BASE_SECURE / 2) /
  2;
export const widthCard2 =
  (widthScreen -
    ClubemberTheme.SIZES.BASE_SECURE * 3.5 -
    ClubemberTheme.SIZES.BASE_SECURE / 2) /
  2;
export const spacingTopHeader =
  Platform.OS === 'ios'
    ? ClubemberTheme.SIZES.BASE_SECURE * 2.9
    : 0;

// review for small screens
export const paddingTopHeader =
  Platform.OS === 'ios'
    ? ClubemberTheme.SIZES.BASE_SECURE * 3
    : ClubemberTheme.SIZES.BASE_SECURE * 2;
