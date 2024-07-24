import { StyleSheet } from 'react-native';
import { widthWindow } from '../../constants/utils';
import { ClubemberTheme } from '../../constants';

export default StyleSheet.create({
  header: {
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    borderWidth: 0,
    borderColor: ClubemberTheme.COLORS.TRANSPARENT,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  avatarContainer: {
    position: 'absolute',
    marginTop: 0,
    width: 100
  },
  avatar: {
    width: ClubemberTheme.SIZES.BASE_SECURE * 3,
    height: ClubemberTheme.SIZES.BASE_SECURE * 3,
    borderRadius: 62,
    borderWidth: 0
  },
  notifyButton: {
    alignSelf: 'center',
    padding: 0,
    marginStart: ClubemberTheme.SIZES.BASE_SECURE
  },
  title: {
    textAlign: 'center',
    fontSize: ClubemberTheme.SIZES.BASE_SECURE * 1.5,
    fontWeight: 'bold',
    letterSpacing: 1.5
  },
  navbar: {
    paddingVertical: 0,
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE * 1.5,
    paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
    zIndex: 5,
    height: ClubemberTheme.SIZES.BASE_SECURE * 3.5
  },
  shadow: {
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 4
  },
  notify: {
    backgroundColor: ClubemberTheme.COLORS.LABEL,
    borderRadius: 4,
    height: ClubemberTheme.SIZES.BASE_SECURE / 2,
    width: ClubemberTheme.SIZES.BASE_SECURE / 2,
    position: 'absolute',
    top: -3,
    right: 1
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: ClubemberTheme.COLORS.ICON
  },
  search: {
    height: 48,
    width: widthWindow - 32,
    marginHorizontal: ClubemberTheme.SIZES.BASE_SECURE,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: ClubemberTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4
  },
  tab: {
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT,
    width: widthWindow * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 4
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: ClubemberTheme.COLORS.HEADER
  }
});
