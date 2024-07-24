import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_MODAL
  },
  bottomView:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_MODAL
  },
  modalView: {
    margin: ClubemberTheme.SIZES.BASE,
    backgroundColor: ClubemberTheme.COLORS.WHITE,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE,
    padding: ClubemberTheme.SIZES.BASE,
    alignItems: 'center',
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 0,
    textAlign: 'center'
  }
});
