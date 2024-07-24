import React, { FC, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import {Image, ScrollView} from "react-native";
import styles from "./styles";
import ClubTitleCard from "../../../../../components/general/title-card/title-card";
import {ClubemberTheme, Images} from "../../../../../constants";
import ClubCardIconButton from "../../../../../components/card/card-icon-button/card-icon-button";
import ClubButton from "../../../../../components/general/buttons/button/button";
import DirectorioItem from "./directorio-item/directorio-item";
import { getDirectory } from '../../../../../redux/clubInfoRedux';
import ClubInfoText from '../../../../../components/general/info-text/info-text';


const Directorio: FC<any> = ({name, number, position}) => {
    const [directory, setDirectory] = useState<any>([])
    useEffect(()=>{
        const geAlltDirectory = async () => {
            const data:any = await getDirectory()
            setDirectory(data)
        }  
        geAlltDirectory()
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
                            Colaboradores del club
                        </ClubTitleCard>
                        <ClubInfoText>
                            Conozca a los colaboradores a su disposición. No dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
                        </ClubInfoText>
                    </Block>

                    <Block style={styles.subSection}>
                        {directory?.map((item:any, index:any)=>{
                            return(<DirectorioItem image={item.Foto} name={item.Tipo_de_Emergencia} number={item.Telefono} position={item.Fun} key={index}/>)
                        })}
                    </Block>
                </ScrollView>
            </Block>
        </Block>
    );
};

export default Directorio;
