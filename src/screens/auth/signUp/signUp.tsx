import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import ClubBackground from '../../../components/general/backgrounds/club-background';
import {
  Keyboard,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  ScrollView,
  TextInputFocusEventData,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { heightScreen, widthScreen } from '../../../constants/utils';
import styles from './styles';
import ClubLabelForm from '../../../components/form/label/label';
import ClubInputText from '../../../components/form/input-text/input-text';
import ClubButton from '../../../components/general/buttons/button/button';
import ClubTitle from '../../../components/general/title/title';
import ClubContext from '../../../context/context';
import ClubInfoText from '../../../components/general/info-text/info-text';
import * as LocalAuthentication from 'expo-local-authentication';
import { registerUser } from '../../../redux/userRedux';
import ClubModalInformation from '../../../components/general/modal/modal-information/modal-information';
import ClubTitleCard from '../../../components/general/title-card/title-card';

const Signup: FC<any> = ({ navigation, route }) => {
  const { state, requestLogin, setUserData } = useContext(ClubContext);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [showInfos, setShowInfos] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const[resCode, setResCode] = useState(0)

  const [warningsInput, setWarningsInput] = useState({
    email: false,
    password: false
  });
  const [user, setUser] = useState({
    email: state.auth.Correo_Electronico,
    password: state.auth.password
  });

  useEffect(() => {
    if (state.auth.authenticated) {
      onLogin();
    } 
  }, [route]);

  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Auth', {
      screen: 'Login'
    })
  };

  const onLogin = async () => {
    if (
      !warningsInput.email &&
      !warningsInput.password &&
      user.email &&
      user.password
    ) {
      const res:any = await registerUser({data:{Nombre_Completo:user.email, Membresia: user.password}})


      if (res.data.code === 3000) {
        setResCode(res.data.code)
        setModalVisible(true);
      }
    }
  };
  
  const focusInput = () => {
    heightScreen < 600 ? setShowInfos(false) : setShowFooter(false);
  };

  const blurInput = (_e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setShowInfos(true);
    setShowFooter(true);
  };

  return (
    <Block flex>
      <ClubBackground>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={'on-drag'}
        >
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
                  {showInfos && (
                    <Block flex={0.22} middle>
                      <ClubTitle>Registro</ClubTitle>
                      <ClubInfoText>
                        Registra tu nombre completo y numero de membresia
                      </ClubInfoText>
                    </Block>
                  )}
                  <Block flex center>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                      <Block>
                        <Block
                          style={{
                            marginBottom: ClubemberTheme.SIZES.BASE_SECURE * 1.4
                          }}
                        >
                          <ClubLabelForm text={'Nombre'} />
                          <ClubInputText
                            onBlur={(
                              e: NativeSyntheticEvent<TextInputFocusEventData>
                            ) => blurInput(e)}
                            onFocus={() => focusInput()}
                            onChangeText={(e) =>
                              setUser({
                                ...user,
                                email: e
                              })
                            }
                            warning={warningsInput.email}
                            error={state.error.status}
                            type={'email-address'}
                            borderless
                            placeholder="Daniela Ortega"
                            icon="user"
                          />
                        </Block>
                        <Block>
                          <ClubLabelForm text={'Membresia'} />
                          <ClubInputText
                            onBlur={(
                              e: NativeSyntheticEvent<TextInputFocusEventData>
                            ) => blurInput(e)}
                            onFocus={() => focusInput()}
                            onChangeText={(e) =>
                              setUser({
                                ...user,
                                password: e
                              })
                            }
                            warning={warningsInput.password}
                            error={state.error.status}
                            viewPass
                            borderless
                            placeholder="LB549"
                          />
                        </Block>
                        <Block center>
                          <ClubButton
                            onPress={() => onLogin()}
                            style={styles.createButton}
                            gradient
                            defaultButton
                          >
                            Registrar
                          </ClubButton>
                          {state.error && (
                            <ClubInfoText
                              error
                              style={{
                                paddingTop:
                                  ClubemberTheme.SIZES.BASE_SECURE / 2,
                                textAlign: 'center'
                              }}
                            >
                              {state.error.message}
                            </ClubInfoText>
                          )}
                        </Block>

                        <Block center>
                          <ClubButton
                            onPress={() =>
                              navigation.navigate('Auth', {
                                screen: 'Login'
                              })
                            }
                            shadowless
                            style={{
                              width: widthScreen * 0.8
                            }}
                            color={'transparent'}
                            textStyle={{
                              color: ClubemberTheme.COLORS.PRIMARY,
                              fontSize: ClubemberTheme.SIZES.BASE * 0.875
                            }}
                          >
                            ¿Ya tienes cuenta?
                          </ClubButton>
                        </Block>
                      </Block>
                    </TouchableWithoutFeedback>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </ClubBackground>
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
                Registro exitoso
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                Su solicitud de evento ha sido enviada con exito!
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

    </Block>
  );
};

export default Signup;
