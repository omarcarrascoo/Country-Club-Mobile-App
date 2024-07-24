import React, {FC, useContext, useEffect, useState} from 'react';
import {Block} from 'galio-framework';
import ClubBackground from '../../../components/general/backgrounds/club-background';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {widthScreen} from '../../../constants/utils';
import ClubContext from '../../../context/context';
import {OtpInput} from 'react-native-otp-entry';
import styles from "./styles";
import {ClubemberTheme} from "../../../constants";
import ClubTitle from "../../../components/general/title/title";
import ClubInfoText from "../../../components/general/info-text/info-text";
import ClubButton from "../../../components/general/buttons/button/button";


const OTPRecovery: FC<any> =  ({ navigation, route }) => {
    const { state, requestLogin } = useContext(ClubContext);
    const [warningsInput, setWarningsInput] = useState({
        email: false
    });
    const [user, setUser] = useState({
        email: state.auth.email
    });

    useEffect(() => {
        const userInput = user.email?.trim();

        setWarningsInput({
            email:
                userInput === '' ||
                userInput?.indexOf('@') === -1 ||
                userInput?.indexOf('.') === -1
        });
    }, [user]);

    const onLogin = async () => {
        if (!warningsInput.email && user.email) {
            console.log("here")
            navigation.navigate('Auth', {
                screen: 'OTPRecovery'
            })
        }
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
                                    <Block style={styles.titleContainer} flex={ClubemberTheme.SIZES.BASE / 72} middle>
                                        <ClubTitle>Recuperar Cuenta</ClubTitle>
                                        <ClubInfoText>
                                            Ingresa tu correo para recibir un código de recuperación.
                                        </ClubInfoText>
                                        <Block style={styles.otpInput}>
                                    <OtpInput
                                        numberOfDigits={5}
                                        onTextChange={(text) => console.log(text)}
                                    />
                                        </Block>
                                    </Block>

                                    <Block flex top center>
                                        <ClubButton
                                            onPress={() => onLogin()}
                                            style={styles.createButton}
                                            gradient
                                            defaultButton
                                        >
                                            Ingresar
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
                                </KeyboardAvoidingView>
                            </Block>
                        </Block>
                    </Block>
                </ScrollView>
            </ClubBackground>
        </Block>
    );
};

export default OTPRecovery;
