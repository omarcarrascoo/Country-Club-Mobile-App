import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
  dropdownContainer: {
    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE * 1.2
  },
  dropdownBtnStyle: {
    width: '100%',
    height: ClubemberTheme.SIZES.BASE * 2,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_INPUT,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    borderWidth: 0,
  },
  dropdownBtnTxtStyle: {
    color: ClubemberTheme.COLORS.PLACEHOLDER,
    textAlign: 'left',
    fontSize: ClubemberTheme.SIZES.BASE * 0.75
  },
  dropdownDropdownStyle: {
    backgroundColor: ClubemberTheme.COLORS.TRANSPARENT,
    borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE / 2
  },
  dropdownRowStyle: {
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE,
    borderBottomColor: ClubemberTheme.COLORS.BORDER_COLOR,
    height: ClubemberTheme.SIZES.BASE * 2.4
  },
  dropdownRowTxtStyle: {
    color: ClubemberTheme.COLORS.TEXT_GRAY_NORMAL,
    textAlign: 'center',
    fontSize: ClubemberTheme.SIZES.BASE * 0.75
  },
  selectedRowStyle: {
    backgroundColor:
      ClubemberTheme.COLORS.BACKGROUND_BUTTON_CARD_PRIMARY
  },
  selectedRowTextStyle: {
    color: ClubemberTheme.COLORS.WHITE
  },
  shadow: {
    shadowColor: ClubemberTheme.COLORS.SHADOW,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2
  }
});
