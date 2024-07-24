import {IGuestInvitationItem, IRecurringGuestInvitationItem} from "../../../interfaces/invitation";
import React, {FC} from "react";
import {Block} from "galio-framework";
import {ClubemberTheme} from "../../../constants";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import ClubLargeCard from "../../card/large-card/large-card";
import ClubTitleCard from "../../general/title-card/title-card";
import IconCard from "../../card/icon-card/icon-card";
import ClubIcon from "../../general/buttons/icon/icon";
import styles from "./styles";
import ClubInfoText from "../../general/info-text/info-text";

interface IGuestItem {
    title: string;
    white?: boolean;
    style?: any;
    navigation: any;
    guests?: IRecurringGuestInvitationItem[];
    isRecurring: boolean
    favorite: any
    reloadAction?: any;
}

const GuestInvitations: FC<IGuestItem> = ({
    title,
    navigation,
    white = false,
    isRecurring = false,
    style,
    guests,
    favorite,
    reloadAction
}) => {

    
    return (
        favorite?(
            <Block
            flex
            style={[
                {
                    paddingBottom: ClubemberTheme.SIZES.BASE_SECURE,
                    ...style
                }
            ]}
            >
                <View style={styles.titleContainer}>
                <ClubTitleCard
                    reloadComponent={reloadAction}
                    flex
                    withAction
                    white={white}
                    onPressAction={reloadAction}
                >
                    {title}
                </ClubTitleCard>
                    {!isRecurring &&
                         <View style={{bottom: 20}}>
                            <ClubIcon
                            style={{
                                paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
                            }}
                            size={ClubemberTheme.SIZES.BASE_SECURE * 1.6}
                            name={'ccw'}
                            iconFamily={'entypo'}
                            color={ClubemberTheme.COLORS.PLACEHOLDER}
                            /></View>
                            }
                        </View>
                    {guests && guests.length > 0 ? (
                        <Block
                            flex
                            style={{
                                maxHeight: ClubemberTheme.SIZES.BASE_SECURE*17,
                                minHeight: ClubemberTheme.SIZES.BASE_SECURE*17,
                                backgroundColor:  ClubemberTheme.COLORS.BACKGROUND_LIGHT,
                                padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
                                borderRadius: 10
                                }}
                                >
                            <ScrollView showsVerticalScrollIndicator={true}>
                                {guests.map((item, index) => (
                                <ClubLargeCard
                                    key={index}
                                    white={white}
                                    title={item.Nombre?.display_value}
                                    isBackgroundColor={isRecurring}
                                    subtitle={!isRecurring ? item.Hora_Ingreso + "\n" + "Hora Llegada" : item.codigoType}
                                    icon={'user'}
                                    iconColor={'#0b3d62'}
                                    action={() => {
                                    navigation.navigate(item.navigation.stack, {
                                        screen: item.navigation.screen,
                                        params: {...item}
                                    });
                                    }}
                                    />
                                    ))}
                            </ScrollView>
                        </Block>
                        ) : (
                        
                            <Block
                            flex
                            style={{
                                minHeight: ClubemberTheme.SIZES.BASE_SECURE*12,
                                backgroundColor:  ClubemberTheme.COLORS.BACKGROUND_LIGHT,
                                padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                                }}
                                >
                                    <ClubInfoText>No hay invitados frecuentes</ClubInfoText>
                            </Block>
                        
                        )}

            </Block>
       ):(
        <Block
        flex
        style={[
            {
                paddingBottom: ClubemberTheme.SIZES.BASE_SECURE,
                ...style
            }
        ]}
    >
        <View style={styles.titleContainer}>
            <ClubTitleCard
                    reloadComponent={reloadAction}
                    flex
                    withAction
                    white={white}
                    onPressAction={reloadAction}
                >
                    {title}
            </ClubTitleCard>
        </View>
            {guests && guests.length > 0 ? (
                <Block
                    flex
                    style={{
                        maxHeight: ClubemberTheme.SIZES.BASE_SECURE*17,
                        minHeight: ClubemberTheme.SIZES.BASE_SECURE*17,
                        backgroundColor:  ClubemberTheme.COLORS.BACKGROUND_LIGHT,
                        padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
                        borderRadius: 10
                        }}
                        >
                    <ScrollView showsVerticalScrollIndicator={true}>
                        {guests.map((item, index) => (
                        <ClubLargeCard
                            key={index}
                            white={white}
                            title={item.Nombre?.display_value}
                            isBackgroundColor={isRecurring}
                            subtitle={!isRecurring ? item.Hora_Ingreso + "\n" + "Hora Llegada" : item.codigoType}
                            icon={'user'}
                            iconColor={'#0b3d62'}
                            action={() => {
                            navigation.navigate(item.navigation.stack, {
                                screen: item.navigation.screen,
                                params: {...item}
                            });
                            }}
                            />
                            ))}
                    </ScrollView>
                </Block>
                ) : (
                
                    <Block
                    flex
                    style={{
                        minHeight: ClubemberTheme.SIZES.BASE_SECURE*12,
                        backgroundColor:  ClubemberTheme.COLORS.BACKGROUND_LIGHT,
                        padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}
                        >
                            <ClubInfoText>No hay invitados hoy</ClubInfoText>
                    </Block>
                
                )}

    </Block>
       )
    );
};

export default GuestInvitations;
