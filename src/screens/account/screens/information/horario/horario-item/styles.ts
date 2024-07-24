import { StyleSheet } from 'react-native';
import {widthScreen} from "../../../../../../constants/utils";
import {ClubemberTheme} from "../../../../../../constants";
import clubemberTheme from "../../../../../../constants/clubember-theme";

export default StyleSheet.create({
    container: {
        width: widthScreen
    },
    events: {
        width: widthScreen
    },
    profileInfo: {
        backgroundColor: ClubemberTheme.COLORS.WHITE,
        borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
        width: '100%',
        shadowColor: clubemberTheme.COLORS.SHADOW,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 4,
        marginVertical: ClubemberTheme.SIZES.BASE_SECURE,
        justifyContent: "flex-start",
        alignItems: "center",
        gap:5
    },
    section: {
        width: widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2,
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE
    },
    subSection: {
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE
    },
    headSection1: {
        width: ClubemberTheme.SIZES.BASE_SECURE * 10,
        height: ClubemberTheme.SIZES.BASE_SECURE * 10,
        paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
        paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2,
    },
    headSection: {
        // paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
        // paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        zIndex: 0,  
    },
    userName: {
        fontFamily: 'SanFrancisoBold',
        fontSize: ClubemberTheme.SIZES.BASE * 1,
        paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 4
    },
    image: {
        width: 50,
        height: 50
    },
    flexRow:{
        flexWrap: "nowrap",
        flexDirection: "row",
        alignItems: "center",
        height: "auto",
        gap: 5,
        marginTop: 10
    }
});
