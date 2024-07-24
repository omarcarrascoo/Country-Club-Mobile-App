import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen
} from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  loginContainer: {
    top: heightScreen - heightScreen / 1.2,
    width: widthScreen,
    height: heightScreen,
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
  },
  otpInput: {
    marginTop: '5%',
    marginRight: '58%'
  },
  inputsContainerStyle: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    // Other styles for your inputs container
  },
  titleContainer: {
    marginTop: 50
  }
});