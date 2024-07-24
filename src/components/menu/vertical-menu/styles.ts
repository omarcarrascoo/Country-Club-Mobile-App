import { StyleSheet } from 'react-native';
import { paddingTopHeader } from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export const styles = StyleSheet.create({
  verticalMenu: {
    paddingTop:
      paddingTopHeader -
      ClubemberTheme.SIZES.BASE_SECURE +
      ClubemberTheme.SIZES.BASE / 4,
    paddingStart: ClubemberTheme.SIZES.BASE_SECURE * 1.2,
    paddingEnd: ClubemberTheme.SIZES.BASE_SECURE,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE
  },
  topLogo: {
    width: ClubemberTheme.SIZES.BASE_SECURE * 6.7,
    height: ClubemberTheme.SIZES.BASE_SECURE * 3.5
  },
  bottomLogo: {
    width: ClubemberTheme.SIZES.BASE_SECURE * 7.5,
    height: ClubemberTheme.SIZES.BASE_SECURE * 2.5,
    marginBottom: 50
  },
  avatar: {
    width: ClubemberTheme.SIZES.BASE_SECURE * 4,
    height: ClubemberTheme.SIZES.BASE_SECURE * 4,
    borderRadius: 62,
    borderWidth: 0,
    zIndex: 0
  },
  userName: {
    fontFamily: 'SanFrancisoBold',
    fontSize: ClubemberTheme.SIZES.BASE * 1,
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 4
  },
  line: {
    borderBottomColor:
      ClubemberTheme.COLORS.TEXT_GRAY_LIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 0.4
  },
  contentMenu: {
    paddingTop: ClubemberTheme.SIZES.BASE_SECURE
  }
});
