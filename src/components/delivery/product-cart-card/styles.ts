import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';



export default StyleSheet.create({
    productDetail:{
        backgroundColor: ClubemberTheme.COLORS.WHITE,
        minHeight: ClubemberTheme.SIZES.BASE_SECURE * 6.5,
        justifyContent: 'space-between',
        padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
        marginBottom: ClubemberTheme.SIZES.BASE_SECURE,
        borderRadius: 5,
        shadowColor: ClubemberTheme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2
    },
    counter:{
        backgroundColor: ClubemberTheme.COLORS.TEXT_GRAY_ULTRA_LIGHT,
        padding: 6,
    },
    section:{
        padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
        justifyContent: 'space-between'
    },
    section2:{
        padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: ClubemberTheme.SIZES.BASE * .8,
        fontFamily: 'SanFrancisoBold',
        color: ClubemberTheme.COLORS.BLACK
    },
    subTitle:{
        fontSize: ClubemberTheme.SIZES.BASE * .7,
        fontFamily: 'SanFrancisoBold',
        color: ClubemberTheme.COLORS.TEXT_GRAY
    },
    price:{
        fontSize: ClubemberTheme.SIZES.BASE* .8,
        fontFamily: 'SanFrancisoBold',
        color: ClubemberTheme.COLORS.BLACK
    },
    editBtn:{
        width: "100%",
        fontSize: ClubemberTheme.SIZES.BASE * .8,
        borderWidth: 1,
        borderColor: ClubemberTheme.COLORS.TEXT_GRAY_LIGHT,
        paddingHorizontal: ClubemberTheme.SIZES.BASE * .8,
        paddingVertical: 4,
        borderRadius: 6,
        color:ClubemberTheme.COLORS.TEXT_GRAY_DARK
    }

});
