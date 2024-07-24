import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen
} from '../../constants/utils';
import { ClubemberTheme } from '../../constants';

export default StyleSheet.create({
  imageBackground: {
    width: widthScreen,
    height: heightScreen,
    zIndex: 0
  },
  container: {
    width: widthScreen
  },
  home: {
    height: heightScreen - heightScreen / 3.4,
    width: widthScreen
  },
  section: {
    paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
    width:
      widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2
  }
});
