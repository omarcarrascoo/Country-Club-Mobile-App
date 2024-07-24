import React, { FC, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import {Image, ScrollView} from "react-native";
import styles from "./styles";
import ClubTitleCard from "../../../../../components/general/title-card/title-card";
import {ClubemberTheme, EventsListStore, Images} from "../../../../../constants";
import ClubCardIconButton from "../../../../../components/card/card-icon-button/card-icon-button";
import ClubButton from "../../../../../components/general/buttons/button/button";
import InterestsSection from "../../../../../components/events/interests-section/interests-section";
import ClubMediumCard from "../../../../../components/card/medium-card/medium-card";
import HorarioItem from "./horario-item/horario-item";
import {NotificationListStore} from "../../../../../constants/notification-store";
import NotificationItem from "../../../../../components/notifications/notification-item/notification-item";
import {HorarioStore} from "../../../../../constants/horario-store";
import ClubInfoText from '../../../../../components/general/info-text/info-text';
import { getAmenidadesReport } from '../../../../../redux/amenidadesRedux';

const Horario: FC<any> = (props) => {
    const { navigation } = props;
    const [amenidades, setAmenidades] = useState([])
    useEffect(()=>{
        const getAllAmenidades = async () =>{
            const data = await getAmenidadesReport()
            setAmenidades(data)
        }
        getAllAmenidades()
    }, [])
    return (
        <Block flex style={styles.container}>
            <Block flex center style={styles.events}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.section}
                >
                    <Block style={styles.subSection}>
                        <ClubTitleCard flex white>
                            Horarios de Servicios y Espacios del Club
                        </ClubTitleCard>
                        <ClubInfoText>
                            Bienvenido a la sección de 'Horarios de Amenidades'. Aquí encontrarás la información actualizada sobre los horarios de funcionamiento de todas las instalaciones y servicios que ofrece
                            nuestro club.
                        </ClubInfoText>
                    </Block>

                    {amenidades?.map((item, index) => {
                        return (
                            <HorarioItem key={index} horario={item}/>
                        );
                    })}



                </ScrollView>
            </Block>
        </Block>
    );
};

export default Horario;
