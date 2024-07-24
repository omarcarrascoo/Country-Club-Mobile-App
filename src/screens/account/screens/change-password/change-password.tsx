import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ClubemberTheme } from '../../../../constants';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubInputForm from '../../../../components/form-group/input/input';
import ClubContext from '../../../../context/context';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import { widthScreen } from '../../../../constants/utils';

const ChangePassword: FC<any> = ({ navigation }) => {
  const { onLoading } = useContext(ClubContext);
  const [isValid, setIsValid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataForm, setDataForm] = useState({
    password: '',
    newPassword: '',
    repeatPassword: ''
  });

  useEffect(() => {
    if (
      dataForm.password &&
      dataForm.newPassword &&
      dataForm.repeatPassword &&
      dataForm.newPassword === dataForm.repeatPassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [dataForm]);

  const onSubmit = () => {
    onLoading(true);
    setTimeout(() => {
      onLoading(false);
      setModalVisible(true);
    }, 3000);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('AccountStack', {
      screen: 'Account'
    });
  };

  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <Block style={[styles.container]}>
        <Block>
          <ClubTitleCard white>Cambiar contraseña</ClubTitleCard>
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

        <Block style={styles.contentDetails}>
          <ClubInputForm
            label={'* Contraseña actual'}
            password
            viewPass
            borderless
            placeholder={'**************'}
            icon="lock"
            iconFamily="Font-Awesome"
            onChange={(item) =>
              setDataForm({
                ...dataForm,
                password: item
              })
            }
          />

          <ClubInputForm
            label={'* Nueva contraseña'}
            password
            viewPass
            borderless
            placeholder={'**************'}
            icon="lock"
            iconFamily="Font-Awesome"
            onChange={(item) =>
              setDataForm({
                ...dataForm,
                newPassword: item
              })
            }
          />

          <ClubInputForm
            label={'* Confirmar nueva contraseña'}
            password
            viewPass
            borderless
            placeholder={'**************'}
            icon="lock"
            iconFamily="Font-Awesome"
            onChange={(item) =>
              setDataForm({
                ...dataForm,
                repeatPassword: item
              })
            }
          />
          {dataForm.newPassword !== dataForm.repeatPassword && (
            <ClubInfoText error>
              La nueva contraseña debe coincidir en ambos campos
            </ClubInfoText>
          )}
        </Block>

        <Block>
          <View style={styles.line} />
        </Block>

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
              Cambio exitoso
            </ClubTitleCard>
            <ClubInfoText
              style={{
                textAlign: 'center'
              }}
            >
              Tu contraseña se ha actualizado de forma exitosa.
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
            Los valores con * son obligatorios
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
            Guardar contraseña
          </ClubButton>
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
    </ScrollView>
  );
};

export default ChangePassword;
