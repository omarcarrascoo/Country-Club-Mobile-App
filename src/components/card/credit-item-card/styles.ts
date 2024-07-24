import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  card: {
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT_CARD,
    borderWidth: 0,
    minHeight: ClubemberTheme.SIZES.BASE * 4,
    marginBottom: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  icon: {
    width: ClubemberTheme.SIZES.BASE * 0.75 * 2,
    height: ClubemberTheme.SIZES.BASE * 0.75 * 2,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    margin: 0
  },
  cardDescription: {
    paddingEnd: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  cardTitle: {
    fontFamily: 'SanFrancisoBold'
  },
  amount: {
    fontFamily: 'SanFrancisoBold'
  },
  cardSubTitle: {
    fontFamily: 'SanFrancisoLight'
  },
  pk:{
    width:0,
  }
});
