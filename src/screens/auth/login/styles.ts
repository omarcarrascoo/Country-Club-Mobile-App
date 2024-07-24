import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen
} from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  loginContainer: {
    
    paddingTop: 20,
    top: heightScreen - heightScreen / 1.2,
    width: widthScreen,
    minHeight: heightScreen,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE,
    borderTopEndRadius:
      ClubemberTheme.SIZES.BASE_SECURE * 2,
    borderBottomEndRadius:
      ClubemberTheme.SIZES.BASE_SECURE * 2,
    borderTopStartRadius:
      ClubemberTheme.SIZES.BASE_SECURE * 2,
    borderBottomStartRadius:
      ClubemberTheme.SIZES.BASE_SECURE * 2,
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  inputIcons: {
    marginRight: ClubemberTheme.SIZES.BASE_SECURE * 0.75
  },
  createButton: {
    marginTop: ClubemberTheme.SIZES.BASE_SECURE * 2,
    margin: 0
  }
});
