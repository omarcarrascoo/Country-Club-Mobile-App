import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedbackComponent, View } from 'react-native';
import styles from './styles';
import ClubIcon from '../../general/buttons/icon/icon';
import ClubInfoText from '../../general/info-text/info-text';
import ClubButton from '../../general/buttons/button/button';
import { ClubemberTheme } from '../../../constants';
import ClubModalInformation from '../../general/modal/modal-information/modal-information';
import ClubTitleCard from '../../general/title-card/title-card';
import ClubSelectForm from '../../form-group/select/select';
import { getPlacesInfo } from '../../../redux/clubInfoRedux';
import ClubContext from '../../../context/context';

const ClubDirectionCard: FC<any> = ({ route, navigation }) => {
    const {state, updateOrder} = useContext(ClubContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [deliveryOption, setDeliveryOption] = useState(state.order.OpcionEntrega?state.order.OpcionEntrega:"");
    const [opcionEntrega, setOpcionEntrega] = useState<any>()

    useEffect(()=>{
      const setAllData = async () =>{
        const dataLugares= await getPlacesInfo()
        let resultsArray:any = [];
        for (let i = 0; i < dataLugares.length; i++) {
          let placeName = dataLugares[i].Nombre;
          resultsArray.push(placeName);
        }
        resultsArray.push("Otro Domicilio");
        setOpcionEntrega(resultsArray)
      }
      setAllData()
    }, [])
    console.log("HISTORLIAL");
    console.log(deliveryOption);
    console.log(state.order.Direccion);
    
    
    

      const onDirectionSelection:any = () =>{
        
          if (deliveryOption === "Otro Domicilio") {
            closeModal()
              navigation.navigate(
                'DirectionDetail',
                {
                  screen: 'DirectionDetail',
                }
              )
          }else if (deliveryOption === "Entrega a mi domicilio") {
            updateOrder({...state.order, OpcionEntrega: deliveryOption, Direccion: state.user.Direccion_de_residencia})
            closeModal()
          } else {
            updateOrder({...state.order, OpcionEntrega: deliveryOption, Direccion: deliveryOption})
            closeModal()
          }
        
       }
       


    const closeModal = () => {
        setModalVisible(false);
      };
    const openModal = () => {
        console.log("click");
        setModalVisible(true);
    };
      
    const RenderModal: FC = () => {
        return (
          <>
          <Block>
            <ClubModalInformation
              bottom={true}
              show={modalVisible}
              onClose={()=>{
                console.log("log");
                
              }}
            >
              <Block>
                <ClubTitleCard
                  white
                  center
                  style={{
                    paddingTop: ClubemberTheme.SIZES.BASE_SECURE
                  }}
                >
                  Seleccione el punto de entrega
                  </ClubTitleCard>
                  <ClubInfoText
                    style={{
                      textAlign: 'center'
                    }}
                  >
                  <ClubSelectForm
                    defaultValue={opcionEntrega}
                    style={{
                      width: '100%', margin: 0
                    }}
                    options={opcionEntrega}
                    onSelect={(item:any)=>{setDeliveryOption(item), onDirectionSelection()}
                  }
                    placeholder={'Puntos de entrega disponibles'}
                  />
                </ClubInfoText>
                <Block middle>
                  <ClubButton
                    shadowless
                    color={ClubemberTheme.COLORS.PRIMARY}
                    onPress={closeModal}
                    style={styles.reserveButton}
                    defaultButton
                  >
                    Cancelar
                  </ClubButton>
                </Block>
              </Block>
            </ClubModalInformation>
          </Block>
          </>
        );
      };
  return (
     <>
      <Block style={styles.productDetail}>
        <RenderModal/>
        <Block row space='between'>
            <Block style={styles.section}>
                <Text style={styles.title}>Entrega en</Text>
                <Block>
                    <Text style={styles.subTitle}>{state.order.OpcionEntrega?deliveryOption:"Seleccione punto de entrega"}</Text>
                </Block>
            </Block>
            
            <Block  style={styles.section2}>
                <Block row center gap={10}>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={styles.editBtn} >Editar</Text>
                    </TouchableOpacity>
                </Block>
            </Block>
        </Block>
        <Block style={{borderTopWidth: .5, borderColor: ClubemberTheme.COLORS.DEFAULT, ...styles.section }}>
            <ClubInfoText style={{paddingBottom: 0, margin: 0}}>{state.order.Direccion?deliveryOption:"No ha seleccionado una direccion" }</ClubInfoText>
        </Block>
        
      </Block>
     </>
  );
};

export default ClubDirectionCard;