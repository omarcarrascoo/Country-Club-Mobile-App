import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen
} from '../../../../constants/utils';
import { ClubemberTheme } from '../../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE * 2,
    paddingHorizontal:
      ClubemberTheme.SIZES.BASE_SECURE * 1.5,
    marginTop: heightScreen - heightScreen / 1.3,
    width: widthScreen,
    minHeight:
      heightScreen / 1.5 + ClubemberTheme.SIZES.BASE_SECURE,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE,
    borderTopEndRadius:
      ClubemberTheme.SIZES.BASE_SECURE * 2,
    borderTopStartRadius:
      ClubemberTheme.SIZES.BASE_SECURE * 2,
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  imageStyle: {
    width: widthScreen,
    height: heightScreen / 2.8
  },
  contentDetails: {
    gap: ClubemberTheme.SIZES.BASE_SECURE / 4,
    flexWrap: 'wrap',
    width: widthScreen,
  },
  line: {
    borderBottomColor:
      ClubemberTheme.COLORS.TEXT_GRAY_LIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    
  },
  subTitle:{
    fontSize: ClubemberTheme.SIZES.BASE * .7,
    fontFamily: "SanFrancisoBold",
    color: ClubemberTheme.COLORS.DEFAULT,
    marginBottom: ClubemberTheme.SIZES.BASE_SECURE /2
  },
  detail: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2,
    width: '90%'
  },
  reserveButton: {
    width: "50%"
    // marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
  }
});
