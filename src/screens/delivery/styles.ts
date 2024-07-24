import { StyleSheet } from 'react-native';
import { widthScreen } from '../../constants/utils';
import { ClubemberTheme } from '../../constants';

export default StyleSheet.create({
    container: {
        width: widthScreen
    },
    events: {
        width: widthScreen
    },
    section: {
        width: widthScreen - ClubemberTheme.SIZES.BASE_SECURE * 2,
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE
    },
    subSection: {
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
        flexDirection: 'row',
        maxWidth: widthScreen,
        width: "100%"
    },
    subSection2:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    cart:{
        backgroundColor: ClubemberTheme.COLORS.DEFAULT, marginLeft: "5%",
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingTop: "1%",
        paddingBottom: "4%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 0,
        paddingLeft: 0,
        paddingRight: 10
    },
    arrowIcon: {
        color: 'black',
        marginLeft: 5,
        fontSize: 20,
    },
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    bookings: {
        marginTop: 40
    },
    titleContainer: {
            flex: 1,
            flexDirection: 'row',
    },
    reserveButton: {
        marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
      }
});
