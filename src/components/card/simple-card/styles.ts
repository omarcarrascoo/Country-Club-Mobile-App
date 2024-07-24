import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { widthCard } from '../../../constants/utils';

const horizontalPadding =
  ClubemberTheme.SIZES.BASE_SECURE * 0.75;

export default StyleSheet.create({
  card: {
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT_CARD,
    borderWidth: 0,
    width: widthCard * 2
  },
  cardContent: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  cardDescription: {
    paddingHorizontal: horizontalPadding,
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  cardTitle: {
    fontFamily: 'SanFrancisoBold'
  },
  cardSubTitle: {
    fontFamily: 'SanFrancisoLight',
    flexWrap: 'wrap'
  },
  topImage: {
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    height: '100%'
  }
});
