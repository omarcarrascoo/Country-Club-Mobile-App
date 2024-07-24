import React, { FC, useContext } from 'react';
import { Block, Text } from 'galio-framework';
import {
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback, View
} from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import ClubIcon from '../../general/buttons/icon/icon';
import { FamilyType } from '../../../interfaces/types';
import ClubButton from '../../general/buttons/button/button';
import ClubCounterInput from '../../form-group/counterInput/counterInput';
import clubemberTheme from '../../../constants/clubember-theme';
import { getTokenFromStorage } from '../../../redux/setToken';
import ClubContext from '../../../context/context';

interface IClubHorizontalCard {
    image?: string;
    title: string;
    description?: string;
    action: () => void;
    counterValue?: number;
    price: string;
    onIncrement?: () => void;
    onDecrement?: () => void;

}
const RestaurantCard: FC<IClubHorizontalCard> = ({
        image,
        title,
        description,
        action,
        price,
        counterValue = 0,
        onIncrement,
        onDecrement
}) => {
    const { state } = useContext(ClubContext);
    const renderTopImage = () => {
        const headers:any = state.token.Authorization
        const productImage = `https://creator.zoho.com${image}` 
        return(
            <TouchableOpacity onPress={action}>
            <Block>
                <Image source={{ uri: productImage, headers: {Authorization: headers} }} style={styles.topImage} />
            </Block>
        </TouchableOpacity>
        )
    };
    

    return (
        <Block
            card
            style={[
                styles.card,
                {
                    backgroundColor: ClubemberTheme.COLORS.WHITE,
                    shadowColor: ClubemberTheme.COLORS.SHADOW,
                    shadowOffset: { width: 0, height: 1 },
                    shadowRadius: 2,
                    shadowOpacity: 0.2,
                    elevation: 2,
                    marginBottom: 4
                }
            ]}
        >
            <TouchableWithoutFeedback onPress={action}>
               
                <Block>
                <Block flex row>

                    <Block flex={0.6} style={styles.cardContent}>
                        <Block style={[styles.cardDescription]}>
                            <Text
                                size={ClubemberTheme.SIZES.BASE*.85 }
                                style={styles.cardTitle}
                                color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
                            >
                                {title}
                            </Text>
                        </Block>

                        <Block style={[styles.cardDescription]}>
                            <Text
                                size={ClubemberTheme.SIZES.BASE * 0.65}
                                style={styles.cardSubTitle}
                                color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
                            >
                                {description? description : (<Text>Por el momemnto no hay descripcion del producto</Text>)}
                            </Text>
                        </Block>
                        <TouchableOpacity style = {{paddingHorizontal:ClubemberTheme.SIZES.BASE_SECURE}}>
                            <Text color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}>Ver mas</Text>
                        </TouchableOpacity>
                    </Block>
                    {image && (
                        <Block flex={0.4} style={[styles.cardDescription]}>
                            {renderTopImage()}
                        </Block>
                    )}

                    </Block>
                    <Block>
                            <View style={styles.line} />
                    </Block>
                    <Block flex row center style={{paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE, justifyContent:"space-between"}}>
                        <Block style={[styles.something]}>
                            <Text color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}>
                                {price}
                            </Text>
                        </Block>
                        {/* <ClubCounterInput
                            center={true}
                            style={{flex: 0}}
                            label='0'
                        /> */}
                        <ClubButton onPress={action}  shadowless style={{margin: 0, marginBottom: clubemberTheme.SIZES.BASE_SECURE / 2, width: "38%"}}>Ver Detalles</ClubButton>
                    </Block>
                </Block>
            </TouchableWithoutFeedback>
        </Block>
    );
};

export { RestaurantCard };
