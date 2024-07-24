import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubBackground from '../../../../components/general/backgrounds/club-background';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import ClubButton from '../../../../components/general/buttons/button/button';
import { ClubemberTheme } from '../../../../constants';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import ClubDatePickerForm from '../../../../components/form-group/date/date';
import ClubSelectForm from '../../../../components/form-group/select/select';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubContext from '../../../../context/context';
import { createSportReservation } from '../../../../redux/sportsRedux';
import { getReservas } from '../../../../redux/reservasRedux';

const SportDetail: FC<any> = ({ route, navigation }) => {
  const { onLoading, state } = useContext(ClubContext);
  const [isValid, setIsValid] = useState(false);
  const [toEdit, _] = useState(route.params.toEdit);
  const [modalVisible, setModalVisible] = useState(false);
  const [lugaresDisponibles, setLugaresDisponibles] = useState([]);
  const [lugar, setLugar] = useState()
  const [hrStart, setHrStart] = useState();
  const [hrFInal, setHrFinal] = useState();
  const [guests, setGuests] = useState<any>(0);
  const [unformatedDate, setUnformatedDate] = useState(new Date())
  const [formatDate, setFormatDate] = useState()
  const [resCode, setResCode] = useState(0)
  const [dataForm, setDataForm] = useState<any>({});

   // FORMATEAR LA FECHA
   useEffect(()=>{
    function formatDateString(inputDateString:any) {
      const inputDate = new Date(inputDateString);
      
      const options:any = { year: 'numeric', month: 'short', day: '2-digit' };
      const formattedDate:any = inputDate.toLocaleDateString('en-GB', options).toUpperCase()
      .split(' ')
      .join('-')
      .toUpperCase();
      console.log(formattedDate);
      
      setFormatDate(formattedDate);
    }
    formatDateString(unformatedDate)
  },[unformatedDate])
  useEffect(()=>{
    if (state.auth.Rol === "Miembro") {
      setDataForm({
        CORREO1: state.auth.Correo_Electronico,
        Deportes: route.params.ID,
        Fecha_a_Reservar: toEdit ? new Date(route.params.date) : formatDate,
        Salidas_Disponibles: toEdit? route.params.Salidas_Disponibles : lugar,
        Hora_Inicio: toEdit ? route.params.Hora_Inicio : hrStart,
        Hora_Fin: toEdit ? route.params.Hora_Fin : hrFInal,
        Invitados: toEdit
          ? route.params.Invitados > 5
            ? 'Mas de 5'
            : route.params.Invitados
          : guests,
          Socios: state.user.ID
      });
    }
    else if (state.auth.Rol === "Hijo") {
      setDataForm({
        CORREO1: state.auth.Correo_Electronico,
        Deportes: route.params.ID,
        Fecha_a_Reservar: toEdit ? new Date(route.params.date) : formatDate,
        Salidas_Disponibles: toEdit? route.params.Salidas_Disponibles : lugar,
        Hora_Inicio: toEdit ? route.params.Hora_Inicio : hrStart,
        Hora_Fin: toEdit ? route.params.Hora_Fin : hrFInal,
        Invitados: toEdit
          ? route.params.Invitados > 5
            ? 'Mas de 5'
            : route.params.Invitados
          : guests,
          Hijos: state.user.ID
      });
    }
    else if(state.auth.Rol === "Conyuge"){
      setDataForm({
        CORREO1: state.auth.Correo_Electronico,
        Deportes: route.params.ID,
        Fecha_a_Reservar: toEdit ? new Date(route.params.date) : formatDate,
        Salidas_Disponibles: toEdit? route.params.Salidas_Disponibles : lugar,
        Hora_Inicio: toEdit ? route.params.Hora_Inicio : hrStart,
        Hora_Fin: toEdit ? route.params.Hora_Fin : hrFInal,
        Invitados: toEdit
          ? route.params.Invitados > 5
            ? 'Mas de 5'
            : route.params.Invitados
          : guests,
        Conyugue: state.user.ID
      });
    }

    
  },[lugar, hrStart, guests, formatDate])
  useEffect(() => {
    if (
      dataForm.Fecha_a_Reservar &&
      dataForm.Hora_Inicio &&
      dataForm.Hora_Fin
    ) {
      setIsValid(true);
    }
  }, [dataForm]);
  const onReserve = async () => {
    
    try {
      if (route.params?.Precio_reserva > 0) {
        navigation.navigate(route.params.navigation.stack, {
          screen: 'TournamentInscription',
          params: { ...route.params, dataInscription: {data:dataForm}, sport:true}
        });
      } else {
        onLoading(true);
        const res:any = await createSportReservation({data:dataForm})
        setResCode(res.data.code)
        onLoading(false)
        setModalVisible(true)
      }  
    } catch (error) {
      console.log(error);
      setResCode(0)
      onLoading(false)
      setModalVisible(true)
      
    }
  };
  const setTimeOption = async () =>{
    const extractedDisplayValue = route.params.Salidas_Disponibles.map((item:any) => item.display_value);
    const sportId= route.params.ID
    try {
      const AllReservations:any = await getReservas()
    
      const filterBySport:any = AllReservations.filter((element:any) => element.Deportes.ID == sportId)
      const FilterSportNames:any = filterBySport?.map((item:any)=>{return item.Salidas_Disponibles})
      const bookedSpaces = AllReservations?.map((item:any)=>{return item.Salidas_Disponibles})
      const setFromArray2 = new Set(FilterSportNames);
      const filteredArray = extractedDisplayValue.filter((element:any) => !setFromArray2.has(element));
      
      setLugaresDisponibles(filteredArray)
    } catch (error) {
      console.error(error);
      setLugaresDisponibles(extractedDisplayValue)
    }
  }
  useEffect(() =>{
    setTimeOption()
  },[])
  const setDateFormats = (time:any) =>{
    try {
      const splitValues = time.split(" ");
      const startTime = splitValues[2];
      const endTime = splitValues[3];
      setHrStart(startTime)
      setHrFinal(endTime)
    } catch (error) {
      console.log(error); 
    }
  }
  useEffect(()=>{
    setDateFormats(lugar)
  }, [lugar])
  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('HomeStack', {
      screen: 'Sports'
    });
  };
  
  const RenderModal: FC = () => {
    return (
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
              ¡Reserva exitosa!
            </ClubTitleCard>
            <ClubInfoText
              style={{
                textAlign: 'center'
              }}
            >
              Has asegurado tu reserva para:  {lugar} el {formatDate}. ¡Prepárate
              para jugar y disfrutar al máximo!
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
    );
  };

  return (
    <ClubBackground imageStyle={styles.imageStyle} image={route.params.Foto_Caratula}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Block style={[styles.container]}>
          <Block>
            <ClubTitleCard white>
              {route.params.Nombre_Deporte} {toEdit && ' - Editar reserva'}
            </ClubTitleCard>
          </Block>

          <Block>
            <View style={styles.line} />
          </Block>

          {!toEdit && (
            <Block>
              <Block
                style={[
                  styles.detail,
                  {
                    paddingEnd: ClubemberTheme.SIZES.BASE_SECURE
                  }
                ]}
                row
              >
                <ClubIcon
                  style={{
                    marginEnd: ClubemberTheme.SIZES.BASE / 3,
                    marginTop: 1
                  }}
                  size={ClubemberTheme.SIZES.BASE * 0.7}
                  name={'calendar'}
                  iconFamily={'antdesign'}
                  color={ClubemberTheme.COLORS.ICON}
                />
                <Text
                  size={ClubemberTheme.SIZES.BASE * 0.75}
                  color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
                >
                  {toEdit ? route.params.Fecha_a_Reservar : route.params.Descripcion}
                </Text>
              </Block>

              <Block style={styles.detail} row>
                <ClubIcon
                  style={{
                    marginEnd: ClubemberTheme.SIZES.BASE / 3,
                    marginTop: 1
                  }}
                  size={ClubemberTheme.SIZES.BASE * 0.7}
                  name={'clock-o'}
                  iconFamily={'Font-Awesome'}
                  color={ClubemberTheme.COLORS.ICON}
                />
                <Text
                  size={ClubemberTheme.SIZES.BASE * 0.75}
                  color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
                >
                  {route.params.Hora_Inicio} - {route.params.Hora_Fin}
                </Text>
              </Block>
            </Block>
          )}

          {!toEdit && (
            <Block>
              <View style={styles.line} />
            </Block>
          )}

          <ClubDatePickerForm
            mode={'date'}
            style={{
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE
            }}
            label={'* Selecciona el día de tu reserva'}
            value={unformatedDate}
            onChange={(_, selectedDate) =>
              setUnformatedDate(selectedDate as any)
            }
          />

          <Block row style={styles.contentDetails} space="between">
            <ClubSelectForm
            style={{marginTop: 10}}
              label='Selecciona tu horario'
              placeholder='Horarios'
              options={lugaresDisponibles}
              onSelect={(item:any)=>{
                setLugar(item)
              }}
            />
          </Block>
            {/* <Text style={{fontSize:ClubemberTheme.SIZES.BASE*.50, marginTop:-12}}>- Solo se muestran horarios disponibles.</Text> */}

            <Block
            row
            style={{
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
            }}
          >
            <ClubIcon
              size={ClubemberTheme.SIZES.BASE * 0.625}
              color={ClubemberTheme.COLORS.DEFAULT}
              name={'info-with-circle'}
              iconFamily={'entypo'}
            />
            <ClubInfoText
              style={{
                marginHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2
              }}
              size={ClubemberTheme.SIZES.BASE * 0.625}
            >
              Solo se muestran horarios disponibles.
            </ClubInfoText>
          </Block>
          <Block>
            <View style={styles.line} />
          </Block>

          <ClubSelectForm
            counter = {true}
            defaultValue={dataForm.Invitados}
            style={{
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE
            }}
            label={'* Invitados'}
            setItems={setGuests}
            placeholder={
              'Selecciona tu cantidad de invitados (sin incluirte a ti).'
            }
          />

          <Block>
            <View style={styles.line} />
          </Block>

          <RenderModal />

          <Block
            row
            style={{
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE
            }}
          >
            <ClubIcon
              size={ClubemberTheme.SIZES.BASE * 0.625}
              color={ClubemberTheme.COLORS.DEFAULT}
              name={'info-with-circle'}
              iconFamily={'entypo'}
            />
            <ClubInfoText
              style={{
                marginHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2
              }}
              size={ClubemberTheme.SIZES.BASE * 0.625}
            >
              Los valores con * son obligatorios para reservar
            </ClubInfoText>
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
              onPress={() => onReserve()}
              style={styles.reserveButton}
              defaultButton
            >
              {toEdit ? 'Actualizar reserva' : 'Hacer reserva'}
            </ClubButton>
          </Block>
        </Block>
      </ScrollView>
    </ClubBackground>
  );
};

export default SportDetail;
