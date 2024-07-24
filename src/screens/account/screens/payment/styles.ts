import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';
import { heightScreen } from '../../../../constants/utils';

export default StyleSheet.create({
  container: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
    paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE * 1.5,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE,
    height: heightScreen
  },
  section: {
    paddingTop: ClubemberTheme.SIZES.BASE_SECURE
  },
  containerCard: {
    maxHeight: ClubemberTheme.SIZES.BASE_SECURE * 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE
  }
});
