import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import ClubInputForm from "../../../components/form-group/input/input";
import ClubSelectForm from "../../../components/form-group/select/select";
import {ClubemberTheme} from "../../../constants";
import ClubButton from "../../../components/general/buttons/button/button";
import { getFormatDate } from '../../../services/utils';
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
    


    const [motivo, setMotivo] = useState("Invitado");
    const [hours, setHours] = useState("");
    const [name, setName] = useState("Invitacion en grupo");
    const [date, setDate] = useState("")
    const [guest, setGuest] = useState<{ Nombre: string }[]>([]);
    const [inputRows, setInputRows] = useState([0]);
    const [infoVisible, setInfoVisible] = useState(true);
    const [dataForm, setDataForm] = useState({})
    const [nombreIvitado, setNombreInvitado] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [resCode, setResCode] = useState(null)
    const [resData, setResData] = useState({})
    const [inputValue, setInputValue] = useState("");
    // FORMATO y POBLADO DE HORAS PARA ZOHO
    const durationOptions = [
    ];
    for (let hour = 0; hour < 24; hour++) {
        const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
        const period = hour < 12 ? 'AM' : 'PM';
        durationOptions.push(`${formattedHour}:00 ${period}`);
    }
    const zohoFormatHour = (hour:string) => {
        let formatted_string:string = hour.replace(' AM', ':00').replace(' PM', ':00')
        console.log(formatted_string);
        setHours(formatted_string)
        
    }
    
    // POST EN API
    const onEventSubmit = async () => {
        const res:any = await registerInvitado(dataForm)
        setResCode(res.data.code)
        await setResData(res.data.data);
        await setModalVisible(true);
    };
    const handleInputChange = (value: string) => {
      setInputValue(value);
  };
  
    const addInputRow = () => {
      setGuest([...guest, { Nombre: inputValue }]); 
      setInputRows((prevRows) => [...prevRows, prevRows.length + 1]);
      setInputValue(""); 
  };
    const deleteInputRow = (index: number) => {
      const updatedGuestList = [...guest];
      updatedGuestList.splice(index, 1); 
      setGuest(updatedGuestList);

      const updatedInputRows = [...inputRows];
      updatedInputRows.splice(index, 1);
      setInputRows(updatedInputRows);
  };

    useEffect(()=>{
       const getDate =  () =>{
            var todayDate:any = getFormatDate()
            console.log(todayDate);
            
            setDate(todayDate)
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
              Nombre: { "last_name": "grupal", "first_name": "Invitación" },
              Fecha_Ingreso: date,
              Lista_Invitados: guest,
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
              Nombre: { "last_name": "grupal", "first_name": "Invitación" },
              Fecha_Ingreso: date,
              Lista_Invitados: guest,
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
              Nombre: { "last_name": "grupal", "first_name": "Invitación" },
              Fecha_Ingreso: date,
              Lista_Invitados: guest,
              Hora_Ingreso: hours,
              CORREO1: state.auth.Correo_Electronico
          },
      });
      }
        
    }, [motivo, name, date, guest, hours]);


    const closeModal = (data:any) => {
        if (resCode === 3000) {
            navigation.navigate(
                'CreateInvitationRapid',
                {
                  screen: 'CreateInvitationRapid',
                  params:{...resData}
                }
              )
            console.log("todoBien");
            console.log(resData);
            
            
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
                  <Block style={styles.inputRow}>
                      <ClubInputForm
                            label={`Nombre de Invitado`}
                            placeholder={'Bruno Aranda'}
                            value={inputValue}
                            onChange={handleInputChange}
                            icon={'user'}
                            iconFamily={'entypo'}
                        />
                                <ClubButton
                                    onPress={addInputRow}
                                    outline
                                    shadowless
                                    style={styles.addButton}
                                >
                                    Agregar
                                </ClubButton>
                  </Block>
                    {inputRows.map((row, index) => (
                        <Block key={index} style={styles.inputRow}>
                            <Block row center style={(index + 1) === inputRows.length  ? { width: '72%' } : { width: '100%' }}>
                                {(index + 1) === inputRows.length  ? (
                                <></>
                            ) : (  
                              <>
                                <Text style={{width:"100%", paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE/2}}>{guest[index]?.Nombre}</Text>
                                <ClubButton
                                    red
                                    onPress={() => deleteInputRow(index)}
                                    outline
                                    shadowless
                                    style={styles.deleteButton}
                                >
                                    Eliminar
                                </ClubButton>
                              </>
                            )}
                            </Block>
                        </Block>

          ))}


                    {/* <ClubSelectForm
                        label={'Motivo de visita'}
                        options={motivoList}
                        onSelect={(selectedItem:any) => {
                            setMotivo(selectedItem);
                        }}
                        placeholder={
                            'Selecciona el motivo de la vista'
                        }
                    /> */}

                    <ClubSelectForm
                        label={'Hora de llegada'}
                        options={durationOptions}
                        onSelect={(selectedItem:any) => {
                            zohoFormatHour(selectedItem);
                        }}
                        placeholder={
                            'Selecciona la hora de ingreso estimada'
                        }
                    />

                </Block>
                <Block middle>
                    <ClubButton
                        disabled={!motivo || !hours}
                        shadowless
                        color={
                            !motivo
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
