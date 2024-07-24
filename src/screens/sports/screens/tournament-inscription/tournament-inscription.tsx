import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import { ClubemberTheme } from '../../../../constants';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubLabelForm from '../../../../components/form/label/label';
import ClubCreditCardItem from '../../../../components/card/credit-card-item/credit-card-item';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import ClubContext from '../../../../context/context';
import { createSportReservation, registerTournament } from '../../../../redux/sportsRedux';
import { err } from 'react-native-svg';
import { reserveEventClub } from '../../../../redux/eventosRedux';
import { postOrder } from '../../../../redux/deliveryRedux';



const TournamentInscription: FC<any> = ({ route, navigation, tournament }) => {
  const creditCards = [
    {
      type: 'master',
      number: '5253 4040 4059 0404'
    },
    {
      type: 'visa',
      number: '4000 4040 4059 3354'
    }
  ];
  if (route.params.new_card) {
    creditCards.push({
      type: route.params.new_card.brand,
      number: route.params.new_card.number
    });
  }
  const { onLoading } = useContext(ClubContext);
  const [isValid, setIsValid] = useState(false);
  const [creditCardSelected, setCreditCardSelected] = useState('');
  const [amount, setAmount] = useState(route.params?.dataInscription?.data?.Precio_Inscripcion);
  const [title, setTitle] = useState('Pagos');
  const [modalVisible, setModalVisible] = useState(false);
  const [resCode, setResCode] = useState(0)

  useEffect(() => {
    if (route.params?.new_card?.number) {
      setCreditCardSelected(route.params.new_card.number);
    }
  }, [route.params]);

  useEffect(() => {
    if (creditCardSelected) {
      setIsValid(true);
    }
  }, [creditCardSelected]);

  useEffect(()=>{
    if (route.params?.tournament === true) {
      console.log("torneo");
      setTitle(route.params?.dataInscription?.data?.Nombre_del_torneo)
      setAmount(route.params?.dataInscription?.data?.Precio_Inscripcion)
    }else if (route.params?.sport === true) {
      console.log("Deporte");
      setTitle(route.params?.Nombre_Deporte)
      setAmount(route.params?.Precio_reserva)
    }else if (route.params?.params?.delivery === true) {
      console.log("Delivery");
      setTitle("Pago Carrito")
      setAmount(route.params?.params?.precioAPagar)
    }else{
      console.log("Evento");
      setTitle(route.params?.Nombre)
      setAmount(route.params?.Precio)
    }
  },[])
  
  
  const onInscription = async () => {
    try {
      if (route.params.tournament === true) {
        console.log("torneo");
        const res:any = await registerTournament(route.params.dataInscription)
        console.log(res);
        setResCode(res.data.code)
      }else if (route.params?.sport === true) {
        console.log("Deporte");
        const res:any = await createSportReservation(route.params.dataInscription)
        console.log(res);
        setResCode(res.data.code)
      }
      else if (route.params?.params?.delivery === true) {
        console.log("Delivery");
        const res:any = await postOrder(route.params.params.precioAPagar)
        console.log(res);
        setResCode(res.data.code)
      } else {
        console.log("Evento");
        const res:any = await reserveEventClub(route.params.dataInscription)
        console.log(res);
        setResCode(res.data.code)
      }    
      setModalVisible(true)
      
    } catch (error) {
      console.error(error)
      setModalVisible(true)
    }
  };
  console.log("params");
  console.log(route.params.params);
  
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('HomeStack', {
      screen: 'Home'
    });
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block style={[styles.container]}>
        <Block>
          <ClubTitleCard white>{title}</ClubTitleCard>
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <Block left style={styles.amountDetails}>
          <ClubInfoText>Monto a pagar</ClubInfoText>
          <ClubInfoText
            style={{
              fontWeight: 'bold',
              fontFamily: 'SanFrancisoBold',
              color: ClubemberTheme.COLORS.ICON_DARK
            }}
            size={ClubemberTheme.SIZES.BASE * 1.8}
          >
            {amount}
          </ClubInfoText>
        </Block>

        <Block>
          <ClubLabelForm text={'Seleccionar tarjeta'} />
          <ClubInfoText>
            Selecciona un metodo de pago a agrega uno nuevo
          </ClubInfoText>

          <Block>
            {creditCards.map((card) => (
              <ClubCreditCardItem
                activeCard={creditCardSelected}
                white
                key={card.number}
                onSelect={(value) => setCreditCardSelected(value)}
                type={card.type as any}
                cardNumber={card.number}
              />
            ))}
          </Block>
        </Block>

        <Block middle row>
          <ClubButton
            style={styles.addPaymentButton}
            outline
            shadowless
            color={ClubemberTheme.COLORS.PRIMARY}
            onPress={() =>
              navigation.navigate('AccountStack', {
                screen: 'NewPaymentMethod',
                params: {
                  fromScreen: 'TournamentInscription'
                }
              })
            }
            defaultButton
          >
            <Block row>
              <Text
                style={{
                  paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2,
                  color: ClubemberTheme.COLORS.DEFAULT,
                  fontSize: ClubemberTheme.SIZES.BASE * .8,
                  fontFamily: 'SanFrancisoLight',
                  textAlign: 'center'
                }}
              >
                Agregar nueva tarjeta
              </Text>
            </Block>
          </ClubButton>
        </Block>

        <Block>
          <ClubModalInformation
            show={modalVisible}
            onClose={() => setModalVisible(!modalVisible)}
          >
            {resCode === 3000?(
              <Block>
              <ClubTitleCard
                white
                center
                style={{
                  paddingTop: ClubemberTheme.SIZES.BASE_SECURE
                }}
              >
                Pago Exitoso
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                Hemos procesado tu pago correctamente, has pagado de
                forma exitosa.
              </ClubInfoText>
              <Block middle>
                <ClubButton
                  shadowless
                  color={ClubemberTheme.COLORS.PRIMARY}
                  onPress={closeModal}
                  style={styles.reserveButton}
                  defaultButton
                >
                  Aceptar
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
                Solicitud Fallida
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                No hemos podido procesar tu pago correctamente, vuelve a intentarlo mas tarde.
              </ClubInfoText>
              <Block middle>
                <ClubButton
                  shadowless
                  color={ClubemberTheme.COLORS.PRIMARY}
                  onPress={closeModal}
                  style={styles.reserveButton}
                  defaultButton
                >
                  Aceptar
                </ClubButton>
              </Block>
            </Block>
            )}
          </ClubModalInformation>
        </Block>

        <Block middle>
          <ClubButton
            disabled={!isValid}
            shadowless
            color={
              !isValid
                ? ClubemberTheme.COLORS.DISABLED
                : ClubemberTheme.COLORS.PRIMARY
            }
            onPress={() => onInscription()}
            style={styles.reserveButton}
            defaultButton
          >
            Finalizar pago
          </ClubButton>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default TournamentInscription;
