import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';

export const styles = StyleSheet.create({
  iconButton: {
    borderColor: 'transparent',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  iconShadow: {
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: -2,
      height: -1
    },
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    elevation: 50
    /*borderWidth: 1,
    borderRadius: 50,
    borderColor: ClubemberTheme.COLORS.BORDER*/
  }
});
