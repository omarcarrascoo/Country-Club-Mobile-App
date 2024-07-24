import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen
} from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  loginContainer: {
    top: heightScreen - heightScreen / 1.1,
    width: widthScreen,
    height: heightScreen,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE,
    borderTopEndRadius: ClubemberTheme.SIZES.BASE * 2,
    borderBottomEndRadius: ClubemberTheme.SIZES.BASE * 2,
    borderTopStartRadius: ClubemberTheme.SIZES.BASE * 2,
    borderBottomStartRadius: ClubemberTheme.SIZES.BASE * 2,
    shadowColor: ClubemberTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 4,
    overflow: 'hidden'
  },
  inputIcons: {
    marginRight: 12
  },
  createButton: {
    marginTop: ClubemberTheme.SIZES.BASE,
    margin: 0
  }
  ,
  reserveButton: {
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
  },
});
