import {CategoryOptions, IEventsList} from "../../../interfaces/events";
import React, {FC, useState} from "react";
import {Block} from "galio-framework";
import {ClubemberTheme} from "../../../constants";
import ClubTitleCard from "../../../components/general/title-card/title-card";
import ClubSelectForm from "../../../components/form-group/select/select";
import {heightScreen} from "../../../constants/utils";
import {ScrollView, Text, View} from "react-native";
import ClubMediumCard from "../../../components/card/medium-card/medium-card";
import {IRestaurantList} from "../../../interfaces/products";
import ClubIcon from "../../../components/general/buttons/icon/icon";
import styles from "../styles";
import {log} from "expo-updates/build-cli/utils/log";
import { TouchableOpacity } from "react-native-gesture-handler";
import ClubInfoText from "../../../components/general/info-text/info-text";

interface IListProductsSection {
    title: string;
    white?: boolean;
    style?: any;
    navigation: any;
    products: any[];
}
const ListProductsSection: FC<IListProductsSection> = ({
    white = false,
    navigation,
    title,
    style, products
    }) => {
    const [restaurantList, setRestaurantList] = useState(products);
    const eventCategories = [
        'Todos los eventos',
        CategoryOptions.EVENTOS_DEPORTIVOS,
        CategoryOptions.EVENTOS_SOCIALES,
        CategoryOptions.RESTAURANTE
    ];
    const ProductImage =async (uri:string) => {
        
    }

    return (
        <Block
            flex
            style={[
                {
                    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE
                }
            ]}
        >
            <View style={styles.titleContainer}>
            <ClubTitleCard flex white={white}>
                {title}
            </ClubTitleCard>

            <View >
            <TouchableOpacity onPress={() => {
                navigation.navigate('RestaurantMenu', {
                    screen: 'RestaurantMenu'
                })
            }}>
                <ClubInfoText>Ver menu completo</ClubInfoText>
            </TouchableOpacity>
            
            </View>

            </View>
            <Block
                flex
                style={{
                    maxHeight: heightScreen / 1.35
                }}
            >
                <ScrollView showsVerticalScrollIndicator={true}>
                    <Block
                        flex
                        row
                        space="between"
                        style={{
                            gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
                            flexWrap: 'wrap'
                        }}
                    >
                        {products?.slice(0,2).map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={()=>{
                                    navigation.navigate(
                                        'ProductDetail',
                                        {
                                          screen: 'ProductDetail',
                                          params: { ...item }
                                        }
                                      )
                                }}>
                                    <ClubMediumCard
                                    noHeight={true}
                                    original={true}
                                    white={white}
                                    price={item.Precio}
                                    title={item.Nombre}
                                    image={item.Foto}
                                    justified
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </Block>
                </ScrollView>
            </Block>
        </Block>
    );
};

export default ListProductsSection;
