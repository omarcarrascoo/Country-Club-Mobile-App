import { StyleSheet } from 'react-native';
import { widthCard } from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  card: {
    borderWidth: 0,
    width: widthCard
  },
  gradiantCard: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4
  },
  cardDescription: {
    paddingHorizontal:
      ClubemberTheme.SIZES.BASE_SECURE * 0.75,
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  cardTitle: {
    // height: ClubemberTheme.SIZES.BASE * 2.5,
    fontFamily: 'SanFrancisoBold'
  },
  cardSubTitle: {
    // height: ClubemberTheme.SIZES.BASE * 2,
    fontFamily: 'SanFrancisoLight'
  }
});
