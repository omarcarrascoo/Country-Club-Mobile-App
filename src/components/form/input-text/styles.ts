import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  success: {
    borderWidth: 1,
    borderColor: ClubemberTheme.COLORS.INPUT_SUCCESS
  },
  warning: {
    borderWidth: 1,
    borderColor: ClubemberTheme.COLORS.INPUT_WARNING
  },
  error: {
    borderWidth: 1,
    borderColor: ClubemberTheme.COLORS.INPUT_ERROR
  },
  shadow: {
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2
  }
});
