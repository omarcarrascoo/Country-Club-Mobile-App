import React, { FC, useContext, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitle from '../../../../components/general/title/title';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ClubemberTheme } from '../../../../constants';
import ClubProductCartCard from '../../../../components/delivery/product-cart-card/product-cart-card';
import ClubDirectionCard from '../../../../components/delivery/direction-card/direction-card';
import ClubResumeCartCard from '../../../../components/delivery/resume-cart-card/resume-cart-card';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubInputText from '../../../../components/form/input-text/input-text';
import ClubContext from '../../../../context/context';


const DirectionDetail: FC<any> = ({ route, navigation }) => {
  const [street, setStreet] = useState("")
  const [house, setHouse] = useState("")
  const {state, updateOrder} = useContext(ClubContext)
  
  const onSave = () =>{
    updateOrder({...state.order, OpcionEntrega: "Otro Domicilio", Direccion: street +" "+ house})
    navigation.navigate(
      'Delivery',
      {
        screen: 'Delivery',
      }
    )
  }
  return (
    <View>
      <Block style={styles.cartDetail}>
        <ScrollView>
          <Block>
            <Text style={styles.subTitle}>Entrega</Text>
            <ClubInfoText>Ingresa o modifica la información de tu entrega.</ClubInfoText>
          </Block>
          <Block row space='between' style={{marginTop: ClubemberTheme.SIZES.BASE_SECURE}}>
            <Block style={styles.inputStreet}>
              <Text style={styles.subTitle2}>Numero de calle</Text>
              <ClubInputText
                placeholder='# Casa'
                onChange={(item:any) =>{
                  setStreet(item)
                }}  
              />
            </Block>
            <Block style={styles.inputStreet}>
              <Text style={styles.subTitle2}>Numero de casa</Text>
              <ClubInputText
                placeholder='Calle'
                onChange={(item:any) =>{
                  setHouse(item)
                }} 
              />
            </Block>
          </Block>
          <ClubButton onPress={()=>onSave()} style={{margin: 0, padding: 0, marginTop: ClubemberTheme.SIZES.BASE_SECURE}} defaultButton = {true} shadowless>Guardar</ClubButton>
        </ScrollView>
      </Block>
    </View>
  );
};

export default DirectionDetail;
