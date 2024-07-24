import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../../constants';


export default StyleSheet.create({
    cartDetail:{
        // paddingTop: ClubemberTheme.SIZES.BASE_SECURE* 2,
        padding: ClubemberTheme.SIZES.BASE_SECURE,
        // marginBottom:ClubemberTheme.SIZES.BASE_SECURE* 3,
    },
    subTitle:{
        fontSize: ClubemberTheme.SIZES.BASE * .85,
        color: ClubemberTheme.COLORS.DEFAULT,
        fontFamily: 'SanFrancisoBold',
        marginVertical: ClubemberTheme.SIZES.BASE_SECURE
    },
    subTitle2:{
        fontSize: ClubemberTheme.SIZES.BASE * .85,
        color: ClubemberTheme.COLORS.DEFAULT,
        fontFamily: 'SanFrancisoBold',
    },
    orderDetail:{
        height: ClubemberTheme.SIZES.BASE_SECURE * 17,
        backgroundColor: ClubemberTheme.COLORS.BACKGROUND_LIGHT,
        padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
        borderRadius: 6
    },
    inputStreet:{
        width: "45%"
    }
});
