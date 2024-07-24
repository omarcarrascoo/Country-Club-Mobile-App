import React, { FC, useContext } from 'react';
import { Block, Text } from 'galio-framework';
import {Image, ScrollView} from "react-native";
import styles from "./styles";
import {ClubemberTheme, Images} from "../../../../../../constants";
import Phone from "../../../../../../../assets/images/phone.png";
import {INotificationItem} from "../../../../../../interfaces/notification";
import {IHorarioItem} from "../../../../../../interfaces/horario";
import ClubIcon from '../../../../../../components/general/buttons/icon/icon';
import ClubContext from '../../../../../../context/context';

interface IHorario {
    horario: IHorarioItem
}
const HorarioItem: FC<IHorario> = ({ horario }) => {
    const {state} = useContext(ClubContext)
    const RenderTopImage = () => {
        const headers = state.token.Authorization    
        const productImage = `https://creator.zoho.com${horario.Foto}`
        return(
          <Block style={styles.headSection1}>
          <Image source={{uri:productImage, headers:{headers}}}
                 style={{...styles.avatar}}/>
            </Block>
        );
      };
    return (
        <Block row middle center style={styles.profileInfo}>
            <RenderTopImage/>

            <Block style={styles.headSection}>
                <Text
                    style={styles.userName}
                    color={ClubemberTheme.COLORS.PRIMARY}
                >
                    {horario.Nombre}
                </Text>
                <Text
                    size={ClubemberTheme.SIZES.BASE * 0.675}
                    style={{width: '95%'}}
                    color={ClubemberTheme.COLORS.SHADOW}
                >
                    {horario.Descripcion}
                </Text>

                {/* <Block style={styles.flexRow}>
                    <ClubIcon
                        name={"calendar"}
                        iconFamily={"Feather"}
                        color={ClubemberTheme.COLORS.DEFAULT}
                        size={ClubemberTheme.SIZES.BASE}
                    />
                    <Text
                        size={ClubemberTheme.SIZES.BASE * 0.675}
                        color={ClubemberTheme.COLORS.SHADOW}
                    >
                        {horario.location?horario.location:"Amenidad del Clubs"}
                    </Text>
                </Block> */}

                <Block style={styles.flexRow}>
                    <ClubIcon
                        name={"clock"}
                        iconFamily={"Feather"}
                        color={ClubemberTheme.COLORS.DEFAULT}
                        size={ClubemberTheme.SIZES.BASE}
                    />
                    <Text
                        size={ClubemberTheme.SIZES.BASE * 0.675}
                        color={ClubemberTheme.COLORS.SHADOW}
                    >
                        {horario.Desde} - {horario.Hasta}
                    </Text>
                </Block>
            </Block>
        </Block>
    );
};

export default HorarioItem;
