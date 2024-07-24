import { StyleSheet } from 'react-native';
import { widthCard, widthScreen } from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
    subSection: {
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
        flexDirection: 'column',
        maxWidth: widthScreen,
        width: "100%"
    },
    subSection2:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0
    },
    buttonText: {
        color: ClubemberTheme.COLORS.WHITE,
        fontWeight: "bold",
        marginLeft: 0,
        paddingLeft: 16,
        paddingRight: 15,
        paddingVertical: 13,
        backgroundColor: ClubemberTheme.COLORS.PRIMARY,
        borderRadius: 10,
        width: 180
    },
    btntext:{
        color: ClubemberTheme.COLORS.WHITE,
        fontSize: 16,
    },
    cart:{
        backgroundColor: ClubemberTheme.COLORS.DEFAULT, 
        marginLeft: "5%",
        paddingLeft: 6,
        paddingRight: 4,
        paddingTop: 15,
        paddingBottom: 14,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 0
    },
    reserveButton: {
        marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
      },
    categorySection:{
        flexDirection: "row",
        width: "100%",
        
    }
});
