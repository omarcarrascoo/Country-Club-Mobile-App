import { StyleSheet } from 'react-native';
import { widthCard, widthScreen } from '../../../constants/utils';
import { ClubemberTheme } from '../../../constants';

export default StyleSheet.create({
    categorySection:{
        flexDirection: "row",
        width: "100%",
        paddingTop: ClubemberTheme.SIZES.BASE_SECURE * 2,

        
        
    },
    categoryTitle:{
        fontSize: ClubemberTheme.SIZES.BASE * .9,
        marginRight: ClubemberTheme.SIZES.BASE_SECURE * 1.2,
        fontFamily: 'SanFrancisoBold',
        color: ClubemberTheme.COLORS.TEXT_GRAY_LIGHT
    },
    categoryTitleSelected :{
        fontSize: ClubemberTheme.SIZES.BASE * .9,
        marginRight: ClubemberTheme.SIZES.BASE_SECURE * 1.2,
        fontFamily: 'SanFrancisoBold',
        color: ClubemberTheme.COLORS.DEFAULT,
    },
    categoryContainer:{
        borderBottomWidth: 2,
        borderColor: ClubemberTheme.COLORS.TEXT_GRAY_DARK,
        paddingBottom: ClubemberTheme.SIZES.BASE_SECURE /2.5
    }
});
