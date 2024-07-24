import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import ClubModalInformation from '../../general/modal/modal-information/modal-information';
import ClubTitleCard from '../../general/title-card/title-card';
import ClubInfoText from '../../general/info-text/info-text';
import ClubSelectForm from '../../form-group/select/select';
import ClubButton from '../../general/buttons/button/button';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ClubTitle from '../../general/title/title';
import { CategoriesStore } from '../../../constants/restaurant-store';
import ClubDeliveryCategoryPicker from '../category-picker/category-picker';
import ClubContext from '../../../context/context';
import { getPlacesInfo } from '../../../redux/clubInfoRedux';
import { Button, Icon } from '../..';
import ClubIcon from '../../general/buttons/icon/icon';

interface IClubHeaderDelivery {
  title?: string;
  categorySection?: boolean;
  navigation?: any
  action?: () => void;
}
const ClubHeaderDelivery: FC<IClubHeaderDelivery> = ({
  title,
  categorySection,
  navigation
}) => {
    const {state, updateOrder} = useContext(ClubContext)
    const [deliveryOption, setDeliveryOption] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
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
    
    const closeModal = () => {
        setModalVisible(false);
      };
      const onDirectionSelect = () => {
        setModalVisible(!modalVisible);
      };
    useEffect(()=>{
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
       onDirectionSelection()
    },[deliveryOption])

    
    const RenderModal: FC = () => {
        return (
          <>
          <Block>
            <ClubModalInformation
              bottom={true}
              show={modalVisible}
              onClose={() => setModalVisible(!modalVisible)}
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
                    onSelect={(item:any)=>setDeliveryOption(item)}
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
      <Block style={styles.subSection}>
      {title?(
        <ClubInfoText ></ClubInfoText>
      ):(<ClubInfoText >Entregar ya en</ClubInfoText>)}
      <Block style={styles.subSection2}>
          {title?(
            <ClubTitle size={ClubemberTheme.SIZES.BASE *.9}>{title}</ClubTitle>
          ):(
            <View>
              
              <TouchableOpacity  
              style={styles.button}
              onPress={() => onDirectionSelect()}
              >
                  <Button  style={styles.buttonText}>
                      <Text style={styles.btntext}>{state.order.OpcionEntrega?state.order.OpcionEntrega  : "Seleccione lugar"}
                      <ClubIcon size={20} name="chevron-down" iconFamily="entypo"/></Text>
                  </Button>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.cart}
            onPress={()=>{
              navigation.navigate(
                'CartDetail',
                {
                  screen: 'CartDetail',
                }
              )
            }}
          >
              <ClubIcon 
              style={{
              // paddingTop: "4%",
              color: ClubemberTheme.COLORS.WHITE,
              }} 
              name="shopping-cart"
              iconFamily="entypo"/>
              <Text style={{color: ClubemberTheme.COLORS.WHITE}} >{state.order.Detalle_de_su_orden.length}</Text>
          </TouchableOpacity>
      </Block>
            

    <RenderModal/>
    <Block style={styles.categorySection}>
    </Block>
    </Block>
    {categorySection &&
    (<ClubDeliveryCategoryPicker
      categories={CategoriesStore}
    />)}
    </>
   

    );
};

export default ClubHeaderDelivery;
