import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
    paddingHorizontal:
      ClubemberTheme.SIZES.BASE_SECURE * 1.5,
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE
  },
  contentDetails: {
    paddingTop: 10,
    gap: ClubemberTheme.SIZES.BASE_SECURE / 4,
    flexWrap: 'wrap'
  },
  line: {
    borderBottomColor: ClubemberTheme.COLORS.BORDER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 0.4
  },
  detail: {
    paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2,
    width: '48%'
  },
  sendButton: {
    marginTop: ClubemberTheme.SIZES.BASE_SECURE * 2,
    marginBottom: ClubemberTheme.SIZES.BASE_SECURE * 6
  }
});
