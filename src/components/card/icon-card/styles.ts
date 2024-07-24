import { StyleSheet } from 'react-native';
import { widthCard } from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  card: {
    borderWidth: 0,
    minWidth: widthCard / 2.08,
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    padding: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  bigCard: {
    borderWidth: 0,
    minWidth: widthCard * .75,
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    padding: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  cardDescription: {
    paddingHorizontal:
      ClubemberTheme.SIZES.BASE_SECURE * 0.1,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardTitle: {
    fontFamily: 'SanFrancisoLight'
  }
});
