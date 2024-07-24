import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubBackground from '../../../../components/general/backgrounds/club-background';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import { ClubemberTheme } from '../../../../constants';
import { FamilyType } from '../../../../interfaces/types';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import ClubContext from '../../../../context/context';
import { registerTournament } from '../../../../redux/sportsRedux';

const TournamentDetail: FC<any> = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { onLoading, state } = useContext(ClubContext);
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [tName, setTName] = useState()
  const [desc, setDesc] = useState()
  const [socioId, setSocioId] = useState()
  const [initialHr, setIntialHr] = useState()
  const [finalHr, setFinalHr] = useState()
  const [tId, seTId] = useState()
  const [price, setPrice] = useState()
  const [dataForm, setDataForm] = useState<any>()
  const [dataReady, setDataReady] = useState(false)

  const onReserve = async() => {
    if (route.params.price !== 'Gratis') {   
      navigation.navigate(route.params.navigation.stack, {
        screen: 'TournamentInscription',
        params: { ...route.params, dataInscription: {...dataForm}, tournament:true}
      });
    } else {
      onLoading(true);
      const res:any = await registerTournament(dataForm)
      onLoading(false);
    }
  };
  const setAllFormData = () =>{
    if (state.auth.Rol === "Miembro") {
      setDataForm({
        data:{
          CORREO1: state.auth.Correo_Electronico,
          Email: state.user.email,
          Nombre : state.user.Nombre_Socio.display_value,
          Nombre_del_torneo: route.params.Nombre_Torneo,
          Descripcion: route.params.Precio_Inscripcion,
          Socios: state.user.ID,
          Fecha_Inicio: route.params.Fecha_Inicio,
          Fecha_Fin: route.params.Fecha_Fin,
          Torneos:  route.params.ID,
          Precio_Inscripcion: route.params.Precio_Inscripcion
        }
      })
    }
    else if (state.auth.Rol === "Hijo") {
      setDataForm({
        data:{
          Socios: state.user.Socios.ID,
          CORREO1: state.auth.Correo_Electronico,
          Email: state.user.email,
          Nombre : state.user.Nombre_Socio.display_value,
          Nombre_del_torneo: route.params.Nombre_Torneo,
          Descripcion: route.params.Precio_Inscripcion,
          Hijos: state.user.ID,
          Fecha_Inicio: route.params.Fecha_Inicio,
          Fecha_Fin: route.params.Fecha_Fin,
          Torneos:  route.params.ID,
          Precio_Inscripcion: route.params.Precio_Inscripcion
        }
      })
    }
    else if(state.auth.Rol === "Conyuge"){
      setDataForm({
        data:{
          Socios: state.user.Socios.ID,
          Email: state.user.email,
          CORREO1: state.auth.Correo_Electronico,
          Nombre : state.user.Nombre_Socio.display_value,
          Nombre_del_torneo: route.params.Nombre_Torneo,
          Descripcion: route.params.Precio_Inscripcion,
          Conyuge: state.user.ID,
          Fecha_Inicio: route.params.Fecha_Inicio,
          Fecha_Fin: route.params.Fecha_Fin,
          Torneos:  route.params.ID,
          Precio_Inscripcion: route.params.Precio_Inscripcion
        }
      })
    }

    setDataReady(true)
  }
  useEffect(()=>{
    if (dataReady === true) {
      onReserve()
    }
  },[dataReady])
  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('HomeStack', {
      screen: 'Sports'
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
    <ClubBackground imageStyle={styles.imageStyle} image={route.params.Arte_Torneo}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Block style={[styles.container]}>
          <Block>
            <ClubTitleCard white>{route.params.Nombre_Torneo}</ClubTitleCard>
          </Block>

          <Block>
            <View style={styles.line} />
          </Block>

          <Block middle row style={styles.contentDetails} space="between">
            <DetailSection icon={'calendar'} title={route.params.Fecha_Inicio} />
            <DetailSection
              icon={'clock-o'}
              iconFamily={'Font-Awesome'}
              title={`${route.params.Hora_Inicio.slice(0, -3)} - ${route.params.Hora_Fin.slice(0, -3)}`}
            />
            <DetailSection
              icon={'money'}
              iconFamily={'Font-Awesome'}
              title={`$${route.params.Precio_Inscripcion}`}
            />
            <DetailSection
              icon={'users'}
              iconFamily={'entypo'}
              title={`${route.params.Capacidad} personas`}
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
                  marginBottom: ClubemberTheme.SIZES.BASE_SECURE * 1.5
                }
              ]}
            />
          </Block>

          <Block>
            <ClubInfoText size={ClubemberTheme.SIZES.BASE * 0.875}>
              {route.params.Descripcion}
            </ClubInfoText>
          </Block>

          <Block>
            <ClubModalInformation
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
                  Inscripción exitosa
                </ClubTitleCard>
                <ClubInfoText
                  style={{
                    textAlign: 'center'
                  }}
                >
                  Te has inscrito de forma exitosa al evento.
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
            </ClubModalInformation>
          </Block>

          <Block center>
            <ClubButton
              shadowless
              onPress={() => setAllFormData()}
              style={styles.reserveButton}
              gradient
              defaultButton
            >
              Inscribirse
            </ClubButton>
          </Block>
        </Block>
      </ScrollView>
    </ClubBackground>
  );
};

export default TournamentDetail;
