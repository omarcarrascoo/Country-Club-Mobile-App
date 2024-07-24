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
// import OneSignal from 'react-native-onesignal';
// import OneSignal from 'react-native-onesignal';
// import { OneSignal } from 'react-native-onesignal';

const Login: FC<any> = ({ navigation, route }) => {
  const { state, requestLogin, setUserData } = useContext(ClubContext);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [showInfos, setShowInfos] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [warningsInput, setWarningsInput] = useState({
    email: false,
    password: false
  });
  const [user, setUser] = useState({
    email: state.auth.Correo_Electronico,
    password: state.auth.password
  });

  // const supportedBiometric = async () => {
  //   const compatible = await LocalAuthentication.hasHardwareAsync();
  //   setIsBiometricSupported(compatible);
  // };

  const promptBiometric = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autenticación Clubembers',
      fallbackLabel: 'Ingresa tu patron o contraseña'
    });
    if (success) {
      onLogin();
      return;
    }
    setUser({
      email: null,
      password: null
    });
  };


  
  useEffect(() => {
    if (state.auth.authenticated) {
      onLogin();
    } 
    // else if (state.auth.enableBiometric) {
    //   supportedBiometric();
    // }
  }, [route]);

  useEffect(() => {
    if (isBiometricSupported && !state.auth.authenticated) {
      promptBiometric();
    }
  }, [isBiometricSupported]);

  useEffect(() => {
    const userInput = user.email?.trim();
    const passInput = user.password?.trim();

    setWarningsInput({
      email:
        userInput === '' ||
        userInput?.indexOf('@') === -1 ||
        userInput?.indexOf('.') === -1,
      password: passInput === ''
    });
  }, [user]);

  const onLogin = async () => {
    if (
      !warningsInput.email &&
      !warningsInput.password &&
      user.email &&
      user.password
    ) {
      requestLogin(user.email.trim().toLowerCase(), user.password.trim());
    }
  };
  
  const focusInput = () => {
    heightScreen < 600 ? setShowInfos(false) : setShowFooter(false);
  };

  const blurInput = (_e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setShowInfos(true);
    setShowFooter(true);
  };

  /*if (state.loading) {
    return <ClubLoading />;
  }*/

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
                      <ClubTitle>Inicia sesión</ClubTitle>
                      <ClubInfoText>
                        Ingresa tu correo electrónico y contraseña para
                        continuar.
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
                          <ClubLabelForm text={'Correo electrónico'} />
                          <ClubInputText
                            withIcon
                            onBlur={(
                              e: NativeSyntheticEvent<TextInputFocusEventData>
                            ) => blurInput(e)}
                            onFocus={() => focusInput()}
                            defaultValue={user.email || ''}
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
                            placeholder="usuario@email.com"
                            icon="user"
                            iconFamily="Font-Awesome"
                            iconStyle={styles.inputIcons}
                            inputMode={'email'}
                          />
                        </Block>
                        <Block>
                          <ClubLabelForm text={'Contraseña'} />
                          <ClubInputText
                            withIcon
                            onBlur={(
                              e: NativeSyntheticEvent<TextInputFocusEventData>
                            ) => blurInput(e)}
                            onFocus={() => focusInput()}
                            defaultValue={user.password || ''}
                            onChangeText={(e) =>
                              setUser({
                                ...user,
                                password: e
                              })
                            }
                            warning={warningsInput.password}
                            error={state.error.status}
                            password
                            viewPass
                            borderless
                            placeholder="**************"
                            icon="lock"
                            iconFamily="Font-Awesome"
                            iconStyle={styles.inputIcons}
                          />
                        </Block>
                        <Block center>
                          <ClubButton
                            onPress={() => onLogin()}
                            style={styles.createButton}
                            gradient
                            defaultButton
                          >
                            Iniciar sesión
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
                                screen: 'AccountRecovery'
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
                            ¿Olvidaste tu contraseña?
                          </ClubButton>
                        </Block>
                      </Block>
                    </TouchableWithoutFeedback>
                  </Block>

                  {showInfos && showFooter && (
                    <Block middle center>
                      <Text
                        style={{
                          textAlign: 'center',
                          width: widthScreen * 0.8,
                          bottom: heightScreen / 5
                        }}
                        color={ClubemberTheme.COLORS.TEXT_GRAY_NORMAL}
                        size={ClubemberTheme.SIZES.BASE * 0.75}
                      >
                        Para crear una nueva cuenta, póngase en contacto con la
                        administración de su club y <TouchableOpacity onPress={() =>
                              navigation.navigate('Auth', {
                                screen: 'signup'
                              })
                            }><Text style={{color:ClubemberTheme.COLORS.PRIMARY}}>registre su cuenta</Text></TouchableOpacity>
                    </Text>
                    </Block>
                  )}
                </KeyboardAvoidingView>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </ClubBackground>
    </Block>
  );
};

export default Login;
