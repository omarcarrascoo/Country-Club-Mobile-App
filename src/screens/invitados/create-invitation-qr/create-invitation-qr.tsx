import React, { FC, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import {Image, ScrollView, Share, Text, TouchableOpacity, View} from 'react-native';
import ClubTitleCard from "../../../components/general/title-card/title-card";
import styles from "./styles";
import {ClubemberTheme, Images} from "../../../constants";
import ClubLabelForm from "../../../components/form/label/label";
import ClubIcon from "../../../components/general/buttons/icon/icon";
import { getInvitadoById } from '../../../redux/invitadosRedux';





const CreateInvitationQR: FC<any> = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [invitationDetails, setInvitationDetails] = useState<any>({})
    // const data = {...route.params.params}
    const data = {...invitationDetails}
    const getInvitationDetail = async (id:string) =>{
        let data:any = await getInvitadoById(id)
        setInvitationDetails(data)
    }
    useEffect(()=>{
        getInvitationDetail(route.params.params.ID)
    },[])

    const shareQRImage = () => {
        Share.share({
            message: 'Check out this QR code!',
            url: data.Barcode_image
        });
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={[styles.container]}>
                <Block>
                    <ClubTitleCard white>
                        Codigo QR
                    </ClubTitleCard>
                </Block>

                <Block>
                    <View style={styles.line} />
                </Block>
                
                {data.Tipo_de_Invitado !== "Invitado"?(
                    <Text>Las entregas a domicilio, personal domestico, personal de jardineria y proveedores no generar QR.</Text>
                )
                :
                (
                <Block>
                    <Text>Comparte este código con tus visitas. Debe ser presentado en la entrada para poder acceder</Text>
                    <View style={styles.qrImageContainer}>
                        <View style={styles.qrImageCenteredContainer}>
                        <Image
                            source={{uri:data.Barcode_image}}
                            style={{ height: 300, width: 300 }}
                        />
                        </View>
                    </View>

                    <View style={styles.qrAppOptionsContainer}>
                            <TouchableOpacity onPress={shareQRImage}>
                                <View style={styles.qrAppOptions}>
                                    <Image
                                        source={Images.WhatsappLogo}
                                        style={{ height: 50, width: 50, marginLeft: 25, marginRight: 25 }}
                                    />
                                </View>
                            </TouchableOpacity>
                    </View>
                </Block>
                )}
                


                <Block style={styles.detailsSection}>
                    <ClubTitleCard white>
                        Detalles de la invitados
                    </ClubTitleCard>
                </Block>

                <Block style={styles.detailItem}>
                    <ClubLabelForm text={"Motivo"}/>
                    <Block>
                        <View style={styles.line} />
                    </Block>
                    <Text>{data.Tipo_de_Invitado}</Text>
                </Block>

                {data.Lista_Invitados?.length >= 1 ?(
                    <Block style={styles.detailItem}>
                    <ClubLabelForm text={"Nombres de invitados"}/>
                    <Block>
                        <View style={styles.line} />
                    </Block>
                    {data.Lista_Invitados?.map((item:any, index:any) => {
                        return <View style={styles.userInfo}>
                            <ClubIcon
                                name={'user'}
                                iconFamily={'entypo'}
                                key={index}
                                size={ClubemberTheme.SIZES.BASE}
                                color={
                                    ClubemberTheme.COLORS.BLACK
                                }
                            />
                            <Text style={{paddingLeft: 10}}>{item.display_value}</Text>
                        </View>
                    })}
                    </Block>
                ):(
                    <Block style={styles.detailItem}>
                    <ClubLabelForm text={"Nombres del invitado"}/>
                    <Block>
                        <View style={styles.line} />
                    </Block>
                    <View style={styles.userInfo}>
                            <ClubIcon
                                name={'user'}
                                iconFamily={'entypo'}
                                size={ClubemberTheme.SIZES.BASE}
                                color={
                                    ClubemberTheme.COLORS.BLACK
                                }
                            />
                            <Text style={{paddingLeft: 10}}>{data?.Nombre?.display_value}</Text>
                        </View>
                    </Block>
                )
                }
                <Block style={styles.detailItem}>
                    <ClubLabelForm text={"Hora de llegada"}/>
                    <Block>
                        <View style={styles.line} />
                    </Block>
                    <View style={styles.userInfo}>
                            <ClubIcon
                                name={'user'}
                                iconFamily={'entypo'}
                                size={ClubemberTheme.SIZES.BASE}
                                color={
                                    ClubemberTheme.COLORS.BLACK
                                }
                            />
                            <Text style={{paddingLeft: 10}}>{data?.Hora_Ingreso}</Text>
                        </View>
                </Block>
            </Block>
        </ScrollView>
    );
};

export default CreateInvitationQR;
