import { StyleSheet } from 'react-native';
import {widthScreen} from "../../../../../constants/utils";
import {ClubemberTheme} from "../../../../../constants";
import clubemberTheme from "../../../../../constants/clubember-theme";

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
        marginVertical: ClubemberTheme.SIZES.BASE_SECURE
    },
    section: {
        width: widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2,
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE
    },
    subSection: {
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
        width: "100%"
    },
    headSection: {
        paddingVertical: ClubemberTheme.SIZES.BASE_SECURE,
        paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2
    },
    avatar: {
        width: ClubemberTheme.SIZES.BASE_SECURE * 4,
        height: ClubemberTheme.SIZES.BASE_SECURE * 4,
        borderRadius: 62,
        borderWidth: 0,
        zIndex: 0
    },
    userName: {
        fontFamily: 'SanFrancisoBold',
        fontSize: ClubemberTheme.SIZES.BASE * 1.2,
        paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 4
    }
});
