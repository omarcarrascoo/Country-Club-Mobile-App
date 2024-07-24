import { StyleSheet } from 'react-native';
import clubemberTheme from '../../../constants/clubember-theme';
import { widthScreen } from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width:
      widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2,
    zIndex: 2
  },
  shadow: {
    shadowColor: clubemberTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4
  },
  menu: {
    paddingTop: clubemberTheme.SIZES.BASE_SECURE / 2,
    paddingBottom: clubemberTheme.SIZES.BASE_SECURE * 2
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor:
      clubemberTheme.COLORS.BACKGROUND_HEADER,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    marginRight: clubemberTheme.SIZES.BASE_SECURE / 2
  },
  containerShadow: {
    shadowColor: clubemberTheme.COLORS.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 1
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: ClubemberTheme.SIZES.BASE * 0.75,
    lineHeight: ClubemberTheme.SIZES.BASE * 1.2,
    paddingVertical: clubemberTheme.SIZES.BASE_SECURE / 1.5,
    paddingHorizontal: clubemberTheme.SIZES.BASE_SECURE,
    color: clubemberTheme.COLORS.MUTED
  }
});
