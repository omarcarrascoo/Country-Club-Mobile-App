import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import {Image, ScrollView, View} from 'react-native';
import { ClubemberTheme, Images } from '../../constants';
import ClubCardIconButton from '../../components/card/card-icon-button/card-icon-button';
import ClubTitleCard from '../../components/general/title-card/title-card';
import ClubButton from '../../components/general/buttons/button/button';
import ButtonCardSimple from '../../components/card/button-card-simple/button-card-simple';
import ClubContext from '../../context/context';

const Membership: FC<any> = (props) => {
    const { navigation } = props;
    const {state} = useContext(ClubContext)
    const [fotoMemberShip, setFotoMemberShip] = useState("")
    const profileFoto:any = `https://creator.zoho.com${state.user.Foto_Socio}`
    
    const headers = state.token.Authorization

    useEffect(()=>{
        const data= state.user.Foto_Membresia?(`https://creator.zoho.com${state.user.Foto_Membresia}`):(`https://creator.zoho.com${state.user.QR_Membresia}`)
        setFotoMemberShip(data)
    },[])
    return (
        <Block flex style={styles.container}>
            <Block flex center style={styles.events}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.section}
                >

                    <Block style={styles.profileInfo}>
                        <Block style={styles.headSection}>
                            <Image source={{uri:profileFoto, headers: {Authorization:headers }}} style={styles.avatar} />
                        </Block>
                        <Block>
                            <Text
                                style={styles.userName}
                                color={ClubemberTheme.COLORS.PRIMARY}
                            >
                                {state.user.Nombre_Socio.display_value}
                            </Text>
                            <Text
                                size={ClubemberTheme.SIZES.BASE * 0.875}
                                color={ClubemberTheme.COLORS.SHADOW}
                                style={styles.tagline}
                            >
                                Membresía digital
                            </Text>
                        </Block>
                        <Block style={styles.qrContainer}>
                                    <Text
                                        style={styles.qrText}
                                        color={ClubemberTheme.COLORS.BACKGROUND_DOWN_ITEM}
                                    >
                                        Mi Membresia
                                    </Text>

                                    <View style={styles.qrImageContainer}>
                                        <View style={styles.qrImageCenteredContainer}>
                                            <Image
                                                // source={Images.ExampleQR}
                                                source={{uri:state.user.Foto_Membresia?(`https://creator.zoho.com${state.user.Foto_Membresia}`):(`https://creator.zoho.com${state.user.QR_Membresia}`), headers: {Authorization:headers}}}
                                                style={{ height: 300, width: 300 }}
                                            />
                                        </View>
                                    </View>
                        </Block>
                        <Block style={styles.info}>
                            <Text
                                style={styles.infoTitle}
                                color={ClubemberTheme.COLORS.BACKGROUND_DOWN_ITEM}
                            >
                                Datos de mi membresia
                            </Text>
                            <View style={styles.values}>
                                <View style={styles.valueItem}>
                                    <Block style={styles.border}>
                                        <ButtonCardSimple
                                            centerT = {true}
                                            white
                                            action={() =>
                                                console.log("")
                                            }
                                            label={state.user.Tipos_de_Membresias.display_value}

                                        />
                                    </Block>
                                    <Text
                                        size={ClubemberTheme.SIZES.BASE * 0.875}
                                        color={ClubemberTheme.COLORS.SHADOW}
                                        style={{...styles.label, }}
                                    >
                                        Tipo de membresia
                                    </Text>
                                </View>
                                <View style={styles.valueItem}>
                                    <Block style={styles.border}>
                                        <ButtonCardSimple
                                            centerT = {true}
                                            white
                                            action={() =>
                                                console.log("")
                                            }
                                            label={state.auth.Numero_de_membresia }

                                        />
                                    </Block>
                                    <Text
                                        size={ClubemberTheme.SIZES.BASE * 0.875}
                                        color={ClubemberTheme.COLORS.SHADOW}
                                        style={{...styles.label, }}
                                    >
                                        Numero de membresia 
                                    </Text>
                                </View>

                                <View style={styles.valueItem}>
                                    <Block style={styles.border}>
                                        <ButtonCardSimple
                                        white
                                        action={() =>
                                            console.log("")
                                        }
                                        centerT = {true}
                                        label={state.auth.Correo_Electronico}
                                        />
                                    </Block>
                                    <Text
                                        size={ClubemberTheme.SIZES.BASE * 0.875}
                                        color={ClubemberTheme.COLORS.SHADOW}
                                        style={{...styles.label}}
                                    >
                                        Correo Electronico
                                    </Text>
                                </View>

                                <View style={styles.valueItem}>
                                <Block style={styles.border}>
                                    <ButtonCardSimple
                                        white
                                        action={() =>
                                            console.log("")
                                        }
                                        centerT
                                        label={state.user.Fecha_Venciminto_Membresia}
                                        />
                                    </Block>
                                    <Text
                                    size={ClubemberTheme.SIZES.BASE * 0.875}
                                    color={ClubemberTheme.COLORS.SHADOW}
                                    style={{...styles.label}}
                                    >
                                        Fecha de vencimiento
                                    </Text>
                                </View>

                                
                            </View>
                        </Block>


                    </Block>
                </ScrollView>
            </Block>
        </Block>
    );
};

export default Membership;
