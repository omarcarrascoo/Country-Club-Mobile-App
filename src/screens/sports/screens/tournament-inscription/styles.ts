import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
    paddingHorizontal:
      ClubemberTheme.SIZES.BASE_SECURE * 1.5,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE
  },
  amountDetails: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE
  },
  line: {
    borderBottomColor:
      ClubemberTheme.COLORS.TEXT_GRAY_LIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 0.4
  },
  detail: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2,
    width: '48%'
  },
  reserveButton: {
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
  },
  addPaymentButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ClubemberTheme.COLORS.DEFAULT,
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
