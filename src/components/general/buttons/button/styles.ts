import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';

export const styles = StyleSheet.create({
  text: {
    fontSize: ClubemberTheme.SIZES.BASE *.8,
    fontFamily: 'SanFrancisoLight'
  },
  gradient: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: ClubemberTheme.COLORS.BORDER_COLOR,
    borderWidth: 0.1
  },
  buttonGradient: {
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
