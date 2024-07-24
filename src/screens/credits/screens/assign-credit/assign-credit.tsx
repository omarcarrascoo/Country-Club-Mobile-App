import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ClubemberTheme } from '../../../../constants';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubSelectForm from '../../../../components/form-group/select/select';
import ClubInputForm from '../../../../components/form-group/input/input';
import ClubContext from '../../../../context/context';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import { getHijoByID } from '../../../../redux/hijosRedux';
import { transferCredit } from '../../../../redux/creditRedux';
import { getConyugById } from '../../../../redux/conyugue';
import { err } from 'react-native-svg';

const AssignCredit: FC<any> = ({ navigation }) => {
  const { onLoading, state } = useContext(ClubContext);
  const [isValid, setIsValid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [family, setFamiliy] = useState<any>()
  const [resCode, setResCode] = useState(0)
  const [dataForm, setDataForm] = useState({
    Socios: state.user.ID,
    Grupo_Familiar: '',
    Saldo_a_Transferir: 0.0,
    Saldo_Disponible: state.user.Limite_de_Credito
  });

  var limiteCredito = parseFloat(state.user.Limite_de_Credito) - parseFloat(state.user.Saldo_a_pagar_Creditos);
  console.log(limiteCredito);
  
  useEffect(() => {
    if (dataForm.Grupo_Familiar && dataForm.Saldo_a_Transferir <= limiteCredito ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [dataForm]);

  useEffect(()=>{
    const getChilds = async () =>{
        let resultsArray:any = [];
        for (let i = 0; i < state.user.Conyugue.length; i++) {
            try {
              let currentChild = state.user.Conyugue[i];
              let result = await getConyugById(currentChild.ID);
              resultsArray.push(result.Nombre_Socio.display_value);
            } catch (error) {
              console.log(error);
              
            }
        }
        for (let i = 0; i < state.user.Registro_Hijos.length; i++) {
          try {
            let currentChild = state.user.Registro_Hijos[i];
            let result = await getHijoByID(currentChild.ID);
            resultsArray.push(result.Nombre_Socio.display_value);
          } catch (error) {
            console.log(error);
          }
          
        }
        console.log("RESULTADO");
        
        console.log(resultsArray);
        
        setFamiliy(resultsArray)
    }
    getChilds()
  },[])
  
  const onSubmit = async () => {
    onLoading(true)
    try {
      const res:any = await transferCredit({data: dataForm})
      setResCode(res.data.code)
      onLoading(false);
      setModalVisible(true);
      
    } catch (error) {
      console.log(error);
      setResCode(0)
      onLoading(false);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('HomeStack', {
      screen: 'Home'
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block style={[styles.container]}>
        <Block>
          <ClubTitleCard white>Enviar dinero</ClubTitleCard>
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <Block row style={styles.contentDetails} space="between">
          <ClubSelectForm
            label={'* Enviar a'}
            options={family}
            onSelect={(selectedItem:any) => {
              setDataForm({
                ...dataForm,
                Grupo_Familiar: selectedItem
              });
            }}
            placeholder={'Selecciona un familiar'}
          />

          <ClubInputForm
            label={'* Monto a enviar'}
            type={'decimal-pad'}
            placeholder={'0.00'}
            onChange={(item) =>
              setDataForm({
                ...dataForm,
                Saldo_a_Transferir: item
              })
            }
          />
          {dataForm.Saldo_a_Transferir > limiteCredito && (
            <ClubInfoText
              error
              style={{
                marginTop: ClubemberTheme.SIZES.BASE_SECURE * -1,
                textAlign: 'center'
              }}
            >
              Monto a enviar no puede exceder total de saldo disponible
            </ClubInfoText>
          )}

          <ClubInputForm
            inputStyle={{
              paddingTop: ClubemberTheme.SIZES.BASE / 2,
              height: ClubemberTheme.SIZES.BASE * 5,
              textAlignVertical: 'top',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}
            multiline
            label={'Comentarios'}
            placeholder={'Agrega un comentario en tu transacción'}
            // onChange={(item) =>
            //   setDataForm({
            //     ...dataForm,
            //     comments: item
            //   })
            // }
            onChange={()=>{
              console.log("assign-Credit-Coments");
              
            }}
          />
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <ClubModalInformation
          show={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
        >
          {resCode === 3000? (
            <Block>
            <ClubTitleCard
              white
              center
              style={{
                paddingTop: ClubemberTheme.SIZES.BASE_SECURE
              }}
            >
              Envio exitoso
            </ClubTitleCard>
            <ClubInfoText
              style={{
                textAlign: 'center'
              }}
            >
              El credito se ha enviado de forma exitosa a {dataForm.Grupo_Familiar}.
            </ClubInfoText>
            <Block middle>
              <ClubButton
                shadowless
                color={ClubemberTheme.COLORS.PRIMARY}
                onPress={closeModal}
                style={{
                  marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
                }}
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
                style={{
                  marginVertical: ClubemberTheme.SIZES.BASE_SECURE * 2
                }}
                defaultButton
              >
                Aceptar
              </ClubButton>
            </Block>
          </Block>
          )}
        </ClubModalInformation>

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
            Los valores con * son obligatorios para asignar credito
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
            onPress={() => onSubmit()}
            style={styles.sendButton}
            defaultButton
          >
            Enviar
          </ClubButton>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default AssignCredit;
