import { StyleSheet } from 'react-native';
import { widthScreen } from '../../../../constants/utils';
import { ClubemberTheme } from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: widthScreen
  },
  events: {
    width: widthScreen
  },
  section: {
    width:
      widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2,
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE
  }
});
