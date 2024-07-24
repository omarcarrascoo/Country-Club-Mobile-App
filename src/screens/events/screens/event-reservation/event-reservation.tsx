import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Input, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import { ClubemberTheme } from '../../../../constants';
import { FamilyType } from '../../../../interfaces/types';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubLabelForm from '../../../../components/form/label/label';
import ClubInputSelect from '../../../../components/form/select-dropdown/select-dropdown';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import ClubInputText from '../../../../components/form/input-text/input-text';
import { Button } from '../../../../components';
import ClubCounterInput from '../../../../components/form-group/counterInput/counterInput';
import ClubContext from '../../../../context/context';
import { reserveEventClub } from '../../../../redux/eventosRedux';

const EventReservation: FC<any> = ({
  route,
  navigation
}) => {
  const {state} = useContext(ClubContext)
  const [guests, setGuests] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const[resCode, setResCode] = useState(0)
  const [dataForm, setDataForm] = useState<any>({})


  useEffect(()=>{
    if (state.auth.Rol === "Miembro") {
      setDataForm({
        Socios: state.user.ID,
        CORREO: state.auth.Correo_Electronico,
        "Fecha": route.params.Fecha,
  
        "Hora_Inicio": route.params.Hora,
        // "Hora_Fin": "17:00:00",
        "Precio": route.params.Precio,
        "Invitados": guests,
        "Media": route.params.ID,
        
      })
    }
    else if (state.auth.Rol === "Hijo") {
      setDataForm({
        Hijos: state.user.ID,
        CORREO: state.auth.Correo_Electronico,
        "Fecha": route.params.Fecha,
  
        "Hora_Inicio": route.params.Hora,
        // "Hora_Fin": "17:00:00",
        "Precio": route.params.Precio,
        "Invitados": guests,
        "Media": route.params.ID,
      })
    }
    else if(state.auth.Rol === "Conyuge"){
      setDataForm({
        Conyugue: state.user.ID,
        CORREO: state.auth.Correo_Electronico,
        "Fecha": route.params.Fecha,
  
        "Hora_Inicio": route.params.Hora,
        // "Hora_Fin": "17:00:00",
        "Precio": route.params.Precio,
        "Invitados": guests,
        "Media": route.params.ID,
      })
    }
  },[guests])
  useEffect(()=>{
    if (state.auth.Rol === "Miembro") {
      setDataForm({
        Socios: state.user.ID,
        CORREO1: state.auth.Correo_Electronico,
        "Fecha": route.params.Fecha,
  
        "Hora_Inicio": route.params.Hora,
        // "Hora_Fin": "17:00:00",
        "Precio": route.params.Precio,
        "Invitados": guests,
        "Media": route.params.ID,
        
      })
    }
    else if (state.auth.Rol === "Hijo") {
      setDataForm({
        Hijos: state.user.ID,
        CORREO1: state.auth.Correo_Electronico,
        "Fecha": route.params.Fecha,
  
        "Hora_Inicio": route.params.Hora,
        // "Hora_Fin": "17:00:00",
        "Precio": route.params.Precio,
        "Invitados": guests,
        "Media": route.params.ID,
      })
    }
    else if(state.auth.Rol === "Conyuge"){
      setDataForm({
        Conyugue: state.user.ID,
        CORREO1: state.auth.Correo_Electronico,
        Fecha: route.params.Fecha,
  
        "Hora_Inicio": route.params.Hora,
        // "Hora_Fin": "17:00:00",
        "Precio": route.params.Precio,
        "Invitados": guests,
        "Media": route.params.ID,
      })
    }
  },[])
  const onReserve = async () => {
    try {
      if (route.params.Precio > 0) {
        navigation.navigate(route.params.navigation.stack, {
          screen: 'TournamentInscription',
          params: { ...route.params, dataInscription: {data:dataForm}}
        });
      } else {
        const res:any = await reserveEventClub({data:dataForm})
        setResCode(res.data.code)
        setModalVisible(true);
      }
      
    } catch (error) {
      console.log(error);
      setResCode(0)
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('HomeStack', {
      screen: 'Home'
    });
  };

  const DetailSection: FC<{
    title: string;
    icon: string;
    iconFamily?: FamilyType;
  }> = ({ title, icon, iconFamily = 'antdesign' }) => (
    <Block style={styles.detail} row>
      <ClubIcon
        style={{
          marginEnd: ClubemberTheme.SIZES.BASE / 3,
          marginTop: 1
        }}
        size={ClubemberTheme.SIZES.BASE * 0.7}
        name={icon}
        iconFamily={iconFamily}
        color={ClubemberTheme.COLORS.ICON}
      />
      <Text
        size={ClubemberTheme.SIZES.BASE * 0.75}
        color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
      >
        {title}
      </Text>
    </Block>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block style={[styles.container]}>
        <Block>
          <ClubTitleCard white>
            {route.params.Nombre}
          </ClubTitleCard>
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <Block
          middle
          row
          style={styles.contentDetails}
          space="between"
        >
          <DetailSection
            icon={'calendar'}
            title={route.params.Fecha}
          />
          <DetailSection
            icon={'clock-o'}
            iconFamily={'Font-Awesome'}
            title={route.params.Hora}
          />
          <DetailSection
            icon={'money'}
            iconFamily={'Font-Awesome'}
            title={route.params.Precio}
          />
          <DetailSection
            icon={'location-pin'}
            iconFamily={'entypo'}
            title={'Casa Club'}
          />
        </Block>

        <Block>
          <View
            style={[
              styles.line,
              {
                marginBottom:
                  ClubemberTheme.SIZES.BASE_SECURE * 1.5
              }
            ]}
          />
        </Block>

        <Block>
          <ClubLabelForm text={'Invitados'} />
          <ClubInfoText>
            Selecciona tu cantidad de invitados (sin
            incluirte a ti).
          </ClubInfoText>
          <ClubCounterInput
            setItems={setGuests}
            label='Digite sus invitados'
          />
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
                  paddingTop:
                    ClubemberTheme.SIZES.BASE_SECURE
                }}
              >
                ¡Reserva exitosa! 
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                Su solicitud de evento ha sido enviada con exito ¡Pronto nos pondremos en contacto contingo!
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
                  paddingTop:
                    ClubemberTheme.SIZES.BASE_SECURE
                }}
              >
                Error al procesar solicitud
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                Lamentamos informar que ha ocurrido un error al procesar tu solicitud. Por favor, intenta nuevamente.
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
            shadowless
            color={
              ClubemberTheme.COLORS.PRIMARY
            }
            onPress={() => onReserve()}
            style={styles.reserveButton}
            defaultButton
          >
            Reservar
          </ClubButton>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default EventReservation;
