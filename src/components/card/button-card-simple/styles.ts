import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  card: {
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT_CARD,
    borderWidth: 0,
    // minHeight: ClubemberTheme.SIZES.BASE * 2,
    // marginBottom: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  cardTitle: {
    fontFamily: 'SanFrancisoLight',
  }
});
