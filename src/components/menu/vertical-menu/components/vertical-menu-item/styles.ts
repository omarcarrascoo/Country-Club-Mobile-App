import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../../constants';
import clubemberTheme from '../../../../../constants/clubember-theme';

export default StyleSheet.create({
  itemStyle: {
    paddingStart: ClubemberTheme.SIZES.BASE_SECURE
  },
  subItemStyle: {
    paddingStart: ClubemberTheme.SIZES.BASE_SECURE * 2.5
  },
  activeStyle: {
    backgroundColor: ClubemberTheme.COLORS.PRIMARY,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4
  },
  shadow: {
    shadowColor: clubemberTheme.COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});
