import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { widthCard, widthCard2 } from '../../../constants/utils';
import clubemberTheme from '../../../constants/clubember-theme';

const horizontalPadding =
  ClubemberTheme.SIZES.BASE_SECURE * 0.75;

export default StyleSheet.create({
  cardContainer:{
    justifyContent: 'space-around',
    minHeight: 250
  },
  cardContainer2:{
    justifyContent: 'space-around',
    paddingTop: clubemberTheme.SIZES.BASE_SECURE /2
  },
  card: {
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT_CARD,
    borderWidth: 0,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE
  },
  cardWidth:{
    width: widthCard,
  },
  cardWidth2:{
    width: widthCard2,
  },
  cardTexts:{
    justifyContent: "space-between",
  },
  cardDescription: {
    paddingHorizontal: horizontalPadding,
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2.5,
  },
  cardDescriptionJustify:{
    paddingHorizontal: horizontalPadding,
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2,
    // minHeight: 150
  },
  cardDescriptionShort:{
    paddingHorizontal: horizontalPadding,
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 4,
  },
  cardTitle: {
    fontFamily: 'SanFrancisoBold'
    /*maxHeight:
      ClubemberTheme.SIZES.BASE * maxLinesTitle * 1.3*/
  },
  cardSubTitle: {
    fontFamily: 'SanFrancisoLight',
    flexWrap: 'wrap'
    /*maxHeight:
      ClubemberTheme.SIZES.BASE *
      0.75 *
      maxLinesSubTitle *
      1.3*/
  },
  cardDetails: {
    fontFamily: 'SanFrancisoLight',
    maxWidth: '90%'
  },
  topImage: {
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    width: '100%',
    height: ClubemberTheme.SIZES.BASE * 5
  },
  centerRow:{
    alignItems: "center"
  }
});
