import { StyleSheet } from 'react-native';
import {ClubemberTheme} from "../../../constants";

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
  },
  addAnotherGuestButtonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  qrImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  qrImageCenteredContainer: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
  },
  qrAppOptionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  qrAppOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  detailsSection: {
    marginTop: 30
  },
  detailItem: {
    marginTop: 10,
    marginBottom: 10,

  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  }
});
