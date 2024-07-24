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
  addIcon: {
    fontSize: 20
  },
  addIconText: {
    paddingTop: 4,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  invisibleButton: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    // padding: 5,
    // height: 40,
    borderWidth: 0,
    // marginBottom: 10,
    // alignItems: "center"
  },
  infoInvitation: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    padding: 10,
    width: '90%'
  },
  exclamationMark: {
    fontSize: 20,
    justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 20,
  },
  infoText: {
    padding: 10
  },
  inputRow:{
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    gap: 6,
  },
  addButton:{
    marginBottom: 0, 
    width: "35%", 
    borderWidth: .5, 
    borderColor: ClubemberTheme.COLORS.DEFAULT
  },
  deleteButton:{
    marginLeft: ClubemberTheme.SIZES.BASE_SECURE,
    marginBottom: 0, 
    width: "35%", 
    // borderWidth: .5, 
    // borderColor: ClubemberTheme.COLORS.WARNING,
    color: ClubemberTheme.COLORS.WARNING
  },
  reserveButton: {
    marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
  },
});
