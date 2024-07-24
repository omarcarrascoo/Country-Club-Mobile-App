import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import ClubInputForm from "../../../components/form-group/input/input";
import ClubSelectForm from "../../../components/form-group/select/select";
import {ClubemberTheme} from "../../../constants";
import ClubButton from "../../../components/general/buttons/button/button";
import ClubCounterInput from '../../../components/form-group/counterInput/counterInput';
import ClubLabelForm from '../../../components/form/label/label';
import { registerInvitado } from '../../../redux/invitadosRedux';
import ClubContext from '../../../context/context';
import ClubModalInformation from '../../../components/general/modal/modal-information/modal-information';
import ClubTitleCard from '../../../components/general/title-card/title-card';
import ClubInfoText from '../../../components/general/info-text/info-text';
const CreateInvitationNewVisitor: FC<any> = ({ navigation }) => {
    const motivoList = [
        'Invitado',
        'Domicilio',
        'Personal Domestico',
        'Personal de Jardineria',
        'Proveedor'
    ];

    const [motivo, setMotivo] = useState('Invitado');
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [hours, setHours] = useState(null);
    const [date, setDate] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    const [infoVisible, setInfoVisible] = useState(true);
    const [dataForm, setDataForm] = useState({})
    const [resCode, setResCode] = useState()
    const [resData, setResData] = useState({})
    
    // POST AL API DE ZOHO
    const onEventSubmit = async () => { 
        const res:any = await registerInvitado(dataForm)
        await setResCode(res.data.code)
        await setResData(res.data.data);
        await setModalVisible(true);
    };

    // FORMATO y POBLADO DE HORAS PARA ZOHO
    const durationOptions = [
    ];
    for (let hour = 0; hour < 24; hour++) {
        const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
        const period = hour < 12 ? 'AM' : 'PM';
        durationOptions.push(`${formattedHour}:00 ${period}`);
    }
    const zohoFormatHour = (hour:any) => {
        let formatted_string:any = hour.replace(' AM', ':00').replace(' PM', ':00')
        setHours(formatted_string)    
    }
    
    function setFullName(name:any) {
        const campos = name.split(' ');
        if (campos.length > 0) {
            const firstName = campos[0];
            const lastName = campos[1]
            setFirstName(firstName)
            setLastName(lastName)

        }
    }

    useEffect(()=>{
        const getDate = async () => {
            var monthAbbreviations = [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
             'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
             ];              
                var fechaActual = new Date();
                var dia = fechaActual.getDate();
                var mes = monthAbbreviations[fechaActual.getMonth()];
                var año = fechaActual.getFullYear();
                var fechaFormateada = dia + '-' + mes + '-' + año;
             setDate(fechaFormateada)
             
        }
        getDate()
    },[])
    const { state } = useContext(ClubContext);
    useEffect(() => {
      if (state.auth.Rol === "Miembro") {
        setDataForm({
          data: {
              Socio: state.user.ID,
              Nombre_Socio: state.user.Nombre_Socio.display_value,
              Tipo_de_Invitado: motivo,
              Nombre: { "last_name": lastName, "first_name":firstName },
              Fecha_Ingreso: date,
              Hora_Ingreso: hours,
              CORREO1: state.auth.Correo_Electronico
          },
      });
      }
      else if (state.auth.Rol === "Hijo") {
        setDataForm({
          data: {
              Hijos: state.user.ID,
              Nombre_Socio: state.user.Nombre_Socio.display_value,
              Tipo_de_Invitado: motivo,
              Nombre: { "last_name": lastName, "first_name":firstName },
              Fecha_Ingreso: date,
              Hora_Ingreso: hours,
              CORREO1: state.auth.Correo_Electronico
          },
      });
      }
      else if(state.auth.Rol === "Conyuge"){
        setDataForm({
          data: {
              Conyugue: state.user.ID,
              Nombre_Socio: state.user.Nombre_Socio.display_value,
              Tipo_de_Invitado: motivo,
              Nombre: { "last_name": lastName, "first_name":firstName },
              Fecha_Ingreso: date,
              Hora_Ingreso: hours,
              CORREO1: state.auth.Correo_Electronico
          },
      });
      }

    }, [motivo, firstName, date,hours, lastName]);


    const closeModal = (data:any) => {
        if (resCode === 3000) {
            navigation.navigate(
                'CreateInvitationRapid',
                {
                  screen: 'CreateInvitationRapid',
                  params:{...resData}
                }
              )
            
        } else {
            navigation.navigate(
                'Invitados',
                {
                  screen: 'Invitados',
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
            //   bottom={true}
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
                  QR GENERADO
                  </ClubTitleCard>
                  <ClubInfoText
                    style={{
                      textAlign: 'center'
                    }}
                  >
                  Continue para ver el QR y mandarlo a sus Visitas
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
                  Error al Generar QR
                  </ClubTitleCard>
                  <ClubInfoText
                    style={{
                      textAlign: 'center'
                    }}
                  >
                  No hemos podido procesar tu solicitud de envío de QR. Verifica los detalles e inténtalo de nuevo.
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={[styles.container]}>
                {infoVisible && <Block style={styles.infoContainer}>
                    <Block style={styles.infoInvitation}>
                        <TouchableOpacity
                            style={{alignItems: "center"}}
                            onPress={() => setInfoVisible(!infoVisible)}>
                        </TouchableOpacity>
                        <View style={{width: '10.0%'}}><Text style={styles.exclamationMark}>!</Text></View>
                        <View style={{
                            width: '90.0%'
                        }}><Text style={styles.infoText}>Ingrese los datos de su visita para generar un código QR de ingreso
                            (vigente por dos horas) para autorizar su entrada.</Text>
                        </View>
                    </Block>
                    <Block style={{width: '5%', backgroundColor: '#d9d9d9', paddingTop: 5}}>
                        <Text onPress={() => setInfoVisible(!infoVisible)}>X</Text>
                    </Block>
                </Block>}
                <Block
                    row
                    style={styles.contentDetails}
                    space="between"
                >
                    <ClubInputForm
                        label={'Invitado'}
                        placeholder={'Ingresa nombre de invitado'}
                        onChange={(item) => {setFullName(item)}}
                    />
                </Block>
                <ClubSelectForm
                        style={{marginVertical:10}}
                        label={'Seleccione el tipo de visita'}
                        options={motivoList}
                        onSelect={(selectedItem:any) => {
                            setMotivo(selectedItem);
                        }}
                        placeholder={
                            'Invitado'
                        }
                />
                <ClubSelectForm
                    label={'Hora de llegada'}
                    options={durationOptions}
                    onSelect={(selectedItem:any) => {
                        zohoFormatHour(selectedItem);
                    }}
                    placeholder={
                        '00:00 A.M.'
                    }
                />

                <Block middle>
                    <ClubButton
                        disabled={!(motivo&&hours&&firstName&&date)}
                        shadowless
                        color={
                            !(motivo&&hours&&firstName&&date)
                                ? ClubemberTheme.COLORS.DISABLED
                                : ClubemberTheme.COLORS.PRIMARY
                        }
                        onPress={() => onEventSubmit()}
                        style={styles.sendButton}
                        defaultButton
                    >
                        Generar Codigo
                    </ClubButton>
                    
                </Block>
            </Block>
            <RenderModal/>
        </ScrollView>
    );
};

export default CreateInvitationNewVisitor;
