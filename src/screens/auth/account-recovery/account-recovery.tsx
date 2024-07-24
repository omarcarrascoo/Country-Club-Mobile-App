import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import ClubBackground from '../../../components/general/backgrounds/club-background';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { widthScreen } from '../../../constants/utils';
import styles from './styles';
import ClubLabelForm from '../../../components/form/label/label';
import ClubInputText from '../../../components/form/input-text/input-text';
import ClubButton from '../../../components/general/buttons/button/button';
import ClubContext from '../../../context/context';
import ClubInfoText from '../../../components/general/info-text/info-text';
import ClubTitle from '../../../components/general/title/title';
import { ClubemberTheme } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ClubIcon from '../../../components/general/buttons/icon/icon';
import { Text } from 'react-native-svg';
import { resetAccount } from '../../../redux/loginRedux';
import ClubModalInformation from '../../../components/general/modal/modal-information/modal-information';
import ClubTitleCard from '../../../components/general/title-card/title-card';

const AccountRecovery: FC<any> =  ({ navigation, route }) => {
  const { state, requestLogin } = useContext(ClubContext);
  const [user, setUser] = useState();
  const [formData, setFormData] = useState({})
  const [resCode, setResCode] = useState()
  const [modalVisible, setModalVisible] = useState(false);

  const onLogin = async () =>{
    const res:any = await resetAccount(formData)
    setResCode(res.data.code)
    console.log(res.data.code)
    setModalVisible(true)
  }
  useEffect(()=>{
    setFormData({
      data:{
        Correo_Electronico: user
      }
    })
  },[user])

  const closeModal = (data:any) => {
    navigation.navigate('Auth', {
      screen: 'Login'
    })
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
              Correo Enviado
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
              Hemos enviado el correo de recuperación a {user}
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
    <Block flex>
      <ClubBackground>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={'on-drag'}
        >
          <Block>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Auth', {
                screen: 'Login'
              })
            }
            style={{
              marginTop:100,
              marginLeft: 20,
            }}
          >
          <ClubIcon
            name={'arrow-left'}
            iconFamily={'Feather'}
            color={ClubemberTheme.COLORS.WHITE}
            size={ClubemberTheme.SIZES.BASE*3}
          />
          </TouchableOpacity>
      </Block>
          <Block flex bottom>
            <Block style={styles.loginContainer}>
              <Block flex center width={widthScreen * 0.9}>
            
                <KeyboardAvoidingView
                  style={{
                    flex: 1
                  }}
                  behavior="padding"
                  enabled
                >
                  <Block flex={ClubemberTheme.SIZES.BASE / 72} middle>
                    <ClubTitle>Recuperar cuenta</ClubTitle>
                    <ClubInfoText>
                      Ingresa tu correo para recibir un código de recuperación.
                    </ClubInfoText>
                  </Block>
                  <Block flex center>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                      <View>
                        <Block
                          style={{
                            marginBottom: 0
                          }}
                        >
                          <ClubLabelForm text={'Correo electrónico'} />
                          <ClubInputText
                            withIcon
                            defaultValue={''}
                            onChangeText={(e:any) =>
                              setUser(e.toLowerCase())
                            }
                            error={state.error.status}
                            type={'email-address'}
                            borderless
                            placeholder="usuario@email.com"
                            icon="user"
                            iconFamily="Font-Awesome"
                            iconStyle={styles.inputIcons}
                            inputMode={'email'}
                          />
                        </Block>

                        <Block flex top center>
                          <ClubButton
                            onPress={() => onLogin()}
                            style={styles.createButton}
                            gradient
                            defaultButton
                          >
                            Enviar código
                          </ClubButton>
                          {state.error && (
                            <ClubInfoText
                              error
                              style={{
                                paddingBottom:
                                  ClubemberTheme.SIZES.BASE_SECURE / 2,
                                textAlign: 'center'
                              }}
                            >
                              {state.error.message}
                            </ClubInfoText>
                          )}
                        </Block>
                      </View>
                    </TouchableWithoutFeedback>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
            </Block>
          </Block>
          
        </ScrollView>
      </ClubBackground>
      <RenderModal/>
    </Block>
  );
};

export default AccountRecovery;
