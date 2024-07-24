import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ClubemberTheme } from '../../../../constants';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubSelectForm from '../../../../components/form-group/select/select';
import ClubInputForm from '../../../../components/form-group/input/input';
import ClubDatePickerForm from '../../../../components/form-group/date/date';
import { ClubSimpleCard } from '../../../../components/card/simple-card/simple-card';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import { getAmenidadesReport } from '../../../../redux/amenidadesRedux';
import ClubContext from '../../../../context/context';
import { registerEvent } from '../../../../redux/eventosRedux';

const CreateEvent: FC<any> = ({navigation }) => {
  const durationOptions:any = [];
  for (let hour = 0; hour < 24; hour++) {
      const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
      const period = hour < 12 ? 'AM' : 'PM';
      durationOptions.push(`${formattedHour}:00 ${period}`);
  }
  const zohoFormatHour = (hour:any) => {
      let formatted_string:any = hour.replace(' AM', ':00').replace(' PM', ':00')
      setHrStart(formatted_string)    
  }
  const guestOptions = [
    '1 Invitado',
    '2 Invitados',
    '3 Invitados',
    '4 Invitados',
    '5 Invitados',
    'Mas de 5'
  ];

  const contactOptions = ['Telefono', 'Correo', 'Whatsapp'];
  const {state} = useContext(ClubContext)
  const [guests, setGuests] = useState(0);
  const [pack, setPack] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState();
  const [eventName, setEventNAme] = useState();
  const [dataForm, setDataForm] = useState<any>([]);
  const [amenidad, setAmenidad] = useState()
  const [amenidadId, setAmenidadID] = useState()
  const [hrStart, setHrStart] = useState();
  const [hrEnd, setHrEnd] = useState();
  const [childs, setChilds] = useState<any>(0);
  const [contact, setContact] = useState()
  const [comments, setComments] = useState();
  const [allAmenidades,  setAllAmenidades] = useState<any>();
  const [allAmenidadesName,  setAllAmenidadesName] = useState<any>();
  const [resCode, setResCode] = useState(0)
  useEffect(() => {
    if (state.auth.Rol === "Miembro") {
      setDataForm({
        data: {
            Socios: state.user.ID,
            Nombre_del_Evento: eventName,
            Dia_de_Reserva: formatDate,
            Hora_Inicio: hrStart,
            Hora_Fin: hrEnd,
            Invitados: guests,
            Ninos: childs,
            Deseo_ser_contactado_por: contact,
            Comentarios: comments,
            Amenidades: amenidadId,
            CORREO1: state.auth.Correo_Electronico
        },
    });
    }
    else if (state.auth.Rol === "Hijo") {
      setDataForm({
        data: {
            Hijos: state.user.ID,
            Nombre_del_Evento: eventName,
            Dia_de_Reserva: formatDate,
            Hora_Inicio: hrStart,
            Hora_Fin: hrEnd,
            Invitados: guests,
            Ninos: childs,
            Deseo_ser_contactado_por: contact,
            Comentarios: comments,
            Amenidades: amenidadId,
            CORREO1: state.auth.Correo_Electronico
        },
    });
    }
    else if(state.auth.Rol === "Conyuge"){
      setDataForm({
        data: {
          Conyugue: state.user.ID,
            Nombre_del_Evento: eventName,
            Dia_de_Reserva: formatDate,
            Hora_Inicio: hrStart,
            Hora_Fin: hrEnd,
            Invitados: guests,
            Ninos: childs,
            Deseo_ser_contactado_por: contact,
            Comentarios: comments,
            Amenidades: amenidadId,
            CORREO1: state.auth.Correo_Electronico
        },
    });
    }
  }, [eventName, date, ,hrStart, hrEnd, guests, childs, contact, comments, amenidad  ]);

  const onEventSubmit = async () => {
    try {
      const res:any = await registerEvent(dataForm)
      console.log(res.data.code);
      setResCode(res.data.code)
    } catch (error) {
      console.log(error);
      setResCode(0)
    }
    setModalVisible(true);
  };
  
  
  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('HomeStack', {
      screen: 'Events'
    });
  };

  // OBTENER LA INFORMACION DE LAS AMENIDADES
  useEffect(()=>{
    const getAmenidadesInformation = async () =>{
      try {
        const amenidades:any = await getAmenidadesReport();
        
        var amenidadesConID:any = [];
          for (var i = 0; i < amenidades.length; i++) {
              var amenidad = amenidades[i];
              
              amenidadesConID.push({ Nombre: amenidad.Nombre, ID: amenidad.ID });
          }
        var nombreAmenidades:any = [];
          for (var i = 0; i < amenidades.length; i++) {
              var amenidad = amenidades[i];
              
              nombreAmenidades.push(amenidad.Nombre);
          }
        setAllAmenidades(amenidadesConID)
        setAllAmenidadesName(nombreAmenidades)
      } catch (error) {
        console.log(error);
        
      }
    }
    getAmenidadesInformation()
    
  },[])
// FORMATEAR LAS HORAS
  useEffect(()=>{
    const zohoFormatHourStart = (hour:any) => {
      try {
        let formatted_string:any = hour.replace(' AM', ':00').replace(' PM', ':00')
        setHrStart(formatted_string)
      } catch (error) {
        console.log(error);
        
      }    
    }
    zohoFormatHourStart(hrStart)
    const zohoFormatHourEnd = (hour:any) => {
      try {
        let formatted_string:any = hour.replace(' AM', ':00').replace(' PM', ':00')
        setHrEnd(formatted_string) 
      } catch (error) {
        console.log(error);
        
      }   
    }    
    zohoFormatHourEnd(hrEnd)
  },[hrEnd,hrStart])

  
  // FORMATEAR LA FECHA
  useEffect(()=>{
    function formatDateString(inputDateString:any) {
      const inputDate = new Date(inputDateString);
      
      const options:any = { year: 'numeric', month: 'short', day: '2-digit' };
      const formattedDate:any = inputDate.toLocaleDateString('en-GB', options).toUpperCase()
      .split(' ')
      .join('-')
      .toUpperCase();
      setFormatDate(formattedDate);
    }
    formatDateString(date)
  },[date])

  // OBTENER EL ID
  useEffect(()=>{
      function findIdByName(nameToFind:any) {
        try {
          for (const item of allAmenidades) {
            if (item.Nombre === nameToFind) {
              return item.ID;
            }
          }
          return null;
        } catch (error) {
          console.log(error);
          
        }
      }
      var id = findIdByName(amenidad)
      setAmenidadID(id)
  },[amenidad])
  
  
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
              Solicitud recibida
            </ClubTitleCard>
            <ClubInfoText
              style={{
                textAlign: 'center'
              }}
            >
              Hemos recibido tu solicitud de reserva Nos
                pondremos en contacto para completar tu
                solicitud en las próximas 48 horas.
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
              Erro al procesar solicitud
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block style={[styles.container]}>
        <Block>
          <ClubTitleCard white>
            Solicitud de evento personalizado
          </ClubTitleCard>
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <Block
          row
          style={styles.contentDetails}
          space="between"
        >
          
          <ClubSelectForm
            label={'Espacio a reservar'}
            options={allAmenidadesName}
            onSelect={(selectedItem:any) => {
              setAmenidad(selectedItem);
            }}
            placeholder={
              'Selecciona el espacio que quieres reservar'
            }
          />
          {/* <ClubDatePickerForm
            label={'Fecha y Hora'}
            value={date}
            onChange={(_, selectedDate) =>
              setDate(selectedDate as any)
            }
          /> */}
          <ClubInputForm
            label={'Nombre del evento'}
            placeholder={'Ingresa un alias para el evento'}
            onChange={(item) => setEventNAme(item)}
          />
           <ClubDatePickerForm
            mode={'date'}
            style={{
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE
            }}
            label={'Selecciona el día de tu reserva'}
            value={date}
            onChange={(_, selectedDate) =>
              setDate(selectedDate as any)
            }
            
          />
          <Block row style={styles.contentDetails} space="between">
            <ClubSelectForm
              defaultValue={"12:00"}
              style={{
                width: '47%', margin: 0
              }}
              label={'Hora de inicio'}
              options={durationOptions}
              onSelect={(selectedHourRange:any) => {
                setHrStart(selectedHourRange);
              }}
              placeholder={'Selecciona el horario que quieres iniciar'}
            />

            <ClubSelectForm
              defaultValue={durationOptions}
              style={{
                width: '47%',
                margin:0
              }}
              label={'Hora de fin'}
              options={durationOptions}
              onSelect={(durationOptions:any) => {
                setHrEnd(durationOptions);
              }}
              placeholder={'Selecciona el horario que quieres terminar'}
            />
          </Block>
          



          

          <ClubSelectForm
            counter
            label={'Invitados'}
            options={guestOptions}
            onSelect={(selectedItem:any) => {
              setGuests(selectedItem);
            }}
            placeholder={
              'Selecciona el número total de invitados'
            }
            setItems={setGuests}
          />
          <RenderModal />

          <ClubSelectForm
            options={guestOptions}
            counter
            style={{
              width: '100%'
            }}
            label={'Niños (menores de edad)'}
            placeholder={'Número de invitados'}
            onNumberChange={(item:any) => console.log("item")}
            setItems={setChilds}
          />

          {pack &&
            pack !== 'Crear un paquete personalizado' && (
              <Block
                style={{
                  paddingBottom:
                    ClubemberTheme.SIZES.BASE_SECURE * 1.2
                }}
              >
                <ClubSimpleCard
                  white
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggK7VzR3qwCBMHHSTiRocv1zadz-j74WxlQ059jkh9tAWgF2mE5HV_9UoyuAkOi4z0V0&usqp=CAU'
                  }
                  title={pack}
                  description={
                    'Paquete todo inclusivo, con decoraciones, menú de 3 tiempos y entretenimiento en vivo.'
                  }
                />
              </Block>
            )}

          <ClubSelectForm
            label={'Deseo ser contactado por'}
            options={contactOptions}
            onSelect={(selectedItem:any) => {
              setContact(selectedItem);
            }}
            placeholder={
              'Selecciona medio para ser contactado'
            }
          />

          <ClubInputForm
            inputStyle={{
              paddingTop: ClubemberTheme.SIZES.BASE / 2,
              height: ClubemberTheme.SIZES.BASE * 5,
              textAlignVertical: 'top',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}
            multiline
            label={'Notas adicionales'}
            placeholder={
              'Escribe instrucciones sobre cómo deseas ser contactado o sobre tu evento'
            }
            onChange={(item) => setComments(item)}
          />
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <Block middle>
          <ClubButton
            disabled={!guests}
            shadowless
            color={
              !guests
                ? ClubemberTheme.COLORS.DISABLED
                : ClubemberTheme.COLORS.PRIMARY
            }
            onPress={() => onEventSubmit()}
            style={styles.sendButton}
            defaultButton
          >
            Enviar solicitud
          </ClubButton>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default CreateEvent;
