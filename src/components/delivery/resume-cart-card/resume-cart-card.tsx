import React, { FC, useContext } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ClubIcon from '../../general/buttons/icon/icon';
import ClubInfoText from '../../general/info-text/info-text';
import ClubButton from '../../general/buttons/button/button';
import { ClubemberTheme } from '../../../constants';
import ClubContext from '../../../context/context';

const ClubResumeCartCard: FC<any> = ({ route, navigation }) => {

    const {state} = useContext(ClubContext)
    var propina = 2
    var total = parseFloat(state.order.Precio_Total) + propina
  return (
      <Block style={styles.productDetail}>
        <Block row space='between'>
            <Block style={styles.section}>
                <Block row space='between' style={{marginBottom: ClubemberTheme.SIZES.BASE_SECURE}}>
                    <ClubInfoText style={{paddingBottom: 0, margin: 0}}>Subtotal</ClubInfoText>
                    <ClubInfoText style={{paddingBottom: 0, margin: 0}}>${state.order.Precio_Total}</ClubInfoText>
                </Block>
                <Block row space='between' style={{marginBottom: ClubemberTheme.SIZES.BASE_SECURE}}>
                    <ClubInfoText style={{paddingBottom: 0, margin: 0}}>Precio de Envio</ClubInfoText>
                    <ClubInfoText style={{paddingBottom: 0, margin: 0}}>${propina.toFixed(2)}</ClubInfoText>
                </Block>
            </Block>
        </Block>
        <Block row style={{borderTopWidth: .5, borderColor: ClubemberTheme.COLORS.DEFAULT, ...styles.section }}>
            <Text style={styles.title}>Total a pagar</Text>
            <Text style={styles.title}>{total.toFixed(2)}</Text>
        </Block>
      </Block>
  );
};

export default ClubResumeCartCard;