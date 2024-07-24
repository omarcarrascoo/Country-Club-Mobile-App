import { StyleSheet } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { widthCard } from '../../../constants/utils';

const horizontalPadding =
    ClubemberTheme.SIZES.BASE_SECURE;

export default StyleSheet.create({
    card: {
        backgroundColor: ClubemberTheme.COLORS.TRANSPARENT_CARD,
        borderWidth: 0,
        width: widthCard * 2
    },
    cardContent: {
        paddingVertical: ClubemberTheme.SIZES.BASE_SECURE
    },
    cardDescription: {
        paddingHorizontal: horizontalPadding,
        paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 2
    },
    cardTitle: {
        fontFamily: 'SanFrancisoBold'
    },
    cardSubTitle: {
        fontFamily: 'SanFrancisoLight',
        flexWrap: 'wrap'
    },
    cardDetails: {
        fontFamily: 'SanFrancisoLight'
    },
    cardSpecifications: {
        paddingVertical: ClubemberTheme.SIZES.BASE_SECURE / 4
    },
    tagCard: {
        marginTop: ClubemberTheme.SIZES.BASE_SECURE / 2,
        minHeight: ClubemberTheme.SIZES.BASE_SECURE * 2,
        borderWidth: 1,
        borderColor: ClubemberTheme.COLORS.PRIMARY,
        paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2,
        borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4
    },
    topImage: {
        borderRadius: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
        height: '100%',
        minHeight: 120,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    line: {
        borderBottomColor:
        ClubemberTheme.COLORS.TEXT_GRAY_LIGHT,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 0.4,
    },
    something: {
        flexDirection:'column',
        flex: 1
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "5%"
    },
    button: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    counterText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginBottom: 10,
        
    },
});
