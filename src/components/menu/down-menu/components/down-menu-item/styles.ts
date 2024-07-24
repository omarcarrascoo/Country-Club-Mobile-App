import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../../constants';

export default StyleSheet.create({
  downContainer: {
    paddingEnd: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  itemContainer: {
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    marginTop: ClubemberTheme.SIZES.BASE_SECURE,
    marginBottom: ClubemberTheme.SIZES.BASE_SECURE / 2
    /*shadowColor: ClubemberTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2*/
  },
  menuText: {
    color: ClubemberTheme.COLORS.TEXT_GRAY_DARK
  }
});
