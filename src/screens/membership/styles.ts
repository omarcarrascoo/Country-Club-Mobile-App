import { StyleSheet } from 'react-native';
import { widthScreen } from '../../constants/utils';
import { ClubemberTheme } from '../../constants';
import clubemberTheme from '../../constants/clubember-theme';

export default StyleSheet.create({
  container: {
    width: widthScreen,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_HEADER,
  },
  events: {
    width: widthScreen
  },
  profileInfo: {
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE,
    width: '100%',
    // height: '100%',
    shadowColor: clubemberTheme.COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE,
    paddingTop: 80,
    marginTop: 50,
    top: '5%'
  },
  section: {
    width: widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2,
    paddingTop: ClubemberTheme.SIZES.BASE_SECURE
  },
  subSection: {
    paddingTop: ClubemberTheme.SIZES.BASE_SECURE
  },
  headSection: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
    paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2,
  },
  info: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
    paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2,
    textAlign: "center",
    // right: '10%'
  },
  avatar: {
    width: ClubemberTheme.SIZES.BASE_SECURE * 10,
    height: ClubemberTheme.SIZES.BASE_SECURE * 10,
    borderRadius: 100,
    borderWidth: 0,
    zIndex: -1,
    bottom: "100%",
    left: "25%"
  },
  userName: {
    fontFamily: 'SanFrancisoBold',
    fontSize: ClubemberTheme.SIZES.BASE * 1.3,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 2,
    // marginTop: 40,
    bottom: "150%",
    // left: "21%"
    textAlign: "center"
  },
  tagline: {
    fontFamily: 'SanFranciso',
    fontSize: ClubemberTheme.SIZES.BASE * 0.7,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE *2,
    bottom: "150%",
    textAlign: "center"
    // left: "35%"
  },
  values: {
    bottom: 90,
  },
  valueItem: {
    marginBottom: 10,
    width: "95%",
    left: "2%"
  },
  qrContainer:{
    
  },
  qrText: {
    fontFamily: 'SanFrancisoBold',
    fontSize: ClubemberTheme.SIZES.BASE * .8,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 14,
    textAlign: "center",
    // marginTop: 40,
    bottom: 130,
    // left: "22%"
  },
  infoTitle: {
    fontFamily: 'SanFrancisoBold',
    fontSize: ClubemberTheme.SIZES.BASE * .8,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 14,
    textAlign: "center",
    // marginTop: 40,
    bottom: 110,
    // left: "22%"
  },
  qrImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    bottom: 130,
    left: "0%"
  },
  qrImageCenteredContainer: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    fontFamily: 'SanFrancisoLight',
    fontSize: ClubemberTheme.SIZES.BASE * 0.8,
    color: ClubemberTheme.COLORS.TEXT_GRAY,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 2,
    // bottom: 100,
    // left: "10%",
    textAlign: 'center'
  },
  border:{
    borderColor: ClubemberTheme.COLORS.BORDER,
    borderWidth: 1,
    borderRadius: 5
  }
});
