import React, { FC, useContext, useEffect, useState } from 'react';
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
import ClubSelectForm from '../../../../components/form-group/select/select';
import ClubContext from '../../../../context/context';
import { getFormatDate } from '../../../../services/utils';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import { postOrder } from '../../../../redux/deliveryRedux';
import { parse } from 'react-native-svg';


const PaymentDetail: FC<any> = ({ route, navigation }) => {
  const paymentOptions = ['Tarjeta de Credito', 'Credito Socio']
  const {state, updateOrder} = useContext(ClubContext)
  const [metodo, setMetodo] = useState("")
  const [formData, setFormData] = useState({})
  const fecha = getFormatDate()
  const [modalVisible, setModalVisible] = useState(false);
  const [resCode, setResCode] = useState<any>()
  var propina = 2
  var total:number = parseFloat(state.order.Precio_Total) + propina

  useEffect(()=>{
    updateOrder({...state.order, Metodo_de_pago: metodo})
    if (state.auth.Rol === "Miembro") {
      setFormData({
        data:{
          Detalle_de_su_orden: state.order.Detalle_de_su_orden,
          Creacion: fecha,
          Metodo_de_pago: metodo,
          Precio_Total: total.toFixed(2) ,
          propina: propina.toFixed(2),
          Status: "Ordenada",
          Direccion: state.order.Direccion,
          Miembro: state.user.ID
        }
      })
    }
    else if (state.auth.Rol === "Hijo") {
      setFormData({
        data:{
          Detalle_de_su_orden: state.order.Detalle_de_su_orden,
          Creacion: fecha,
          Metodo_de_pago: metodo,
          Precio_Total: total.toFixed(2) ,
          propina: propina.toFixed(2),
          Status: "Ordenada",
          Direccion: state.order.Direccion,
          Hijo: state.user.ID
        }
      })
    }
    else if(state.auth.Rol === "Conyuge"){
      setFormData({
        data:{
          Detalle_de_su_orden: state.order.Detalle_de_su_orden,
          Creacion: fecha,
          Metodo_de_pago: metodo,
          Precio_Total: total.toFixed(2) ,
          propina: propina.toFixed(2),
          Status: "Ordenada",
          Direccion: state.order.Direccion,
          Conyuge: state.user.ID
        }
      })
    }
   
  },[metodo])
  console.log(formData);
  
  const onEventSubmit = async () => { 
    if (metodo==='Tarjeta de Credito') {
      navigation.navigate('TournamentInscription',{
        screen: 'TournamentInscription',
        params: {  ...route.params,  precioAPagar:total.toFixed(2), dataInscription:{...formData}, delivery:true }
      })
    } else {
      var limiteCredito = parseFloat(state.user.Limite_de_Credito) - parseFloat(state.user.Saldo_a_pagar_Creditos);
      console.log(limiteCredito);
      console.log(total);

      if (limiteCredito<total) {
        console.log(false);
        
        setResCode(0)
        
        // setModalVisible(true);
      } else {
        console.log(true);
        const res:any = await postOrder(formData)
        setResCode(res.data.code)
        console.log(res);
        console.log(res.data.error);
        
        
        // setModalVisible(true);
      }
      
    }
  };

  const closeModal = (data:any) => {
    if (resCode === 3000) {
        state.order
        navigation.navigate(
            'Delivery',
            {
              screen: 'Delivery',
            }
          )
        
    } else {
        navigation.navigate(
            'Delivery',
            {
              screen: 'Delivery',
            }
          ) 
    }
    setModalVisible(!modalVisible);
  };
  const RenderModal: FC = () => {
    return (
      <>
      <Block>
        <ClubModalInformation
          show={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
        >
          {resCode === 3000 ?(
            <Block>
            <ClubTitleCard
              white
              center
              style={{
                paddingTop: ClubemberTheme.SIZES.BASE_SECURE
              }}
            >
              ORDEN GENERADA
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
              Su orden fue enviada de maener exitosa.
            </ClubInfoText>
            <Block middle>
              <ClubButton
                shadowless
                color={ClubemberTheme.COLORS.PRIMARY}
                onPress={closeModal}
                style={styles.reserveButton}
                defaultButton
              >
                Continuar
              </ClubButton>
            </Block>
          </Block>
          ):(
            <Block>
            <ClubTitleCard
              white
              center
              style={{
                paddingTop: ClubemberTheme.SIZES.BASE_SECURE
              }}
            >
              Error en Solicitud
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                Ha habido un error al procesar su orden, cheque su saldo o intente mas tarde
            </ClubInfoText>
            <Block middle>
              <ClubButton
                shadowless
                color={ClubemberTheme.COLORS.PRIMARY}
                onPress={closeModal}
                style={styles.reserveButton}
                defaultButton
              >
                Volver
              </ClubButton>
            </Block>
          </Block>
          )}
        </ClubModalInformation>
      </Block>
      </>
    );
  };
  return (
    <View>
      <Block style={styles.cartDetail}>
        <ScrollView>
          <Block>
            <Text style={styles.subTitle}>Mi pedido</Text>
            <ClubInfoText>Selecciona tu metodo de pago</ClubInfoText>
          </Block>
          <Block row space='between' style={{marginTop: ClubemberTheme.SIZES.BASE_SECURE}}>
            <ClubSelectForm
                label='Metodos de pago'
                placeholder='Seleccione metodo'
                options={paymentOptions}
                onSelect={(item:any) =>{
                  setMetodo(item)
                }}
            />
          </Block>
          <Block>
            <Text style={styles.subTitle}>Resumen</Text>
            <ClubResumeCartCard/>
          </Block>
          <ClubButton onPress={()=> onEventSubmit()} style={{margin: 0, padding: 0, marginTop: ClubemberTheme.SIZES.BASE_SECURE}} defaultButton = {true} shadowless>Siguiente</ClubButton>
        </ScrollView>
      </Block>
      <RenderModal/>
    </View>
  );
};

export default PaymentDetail;
