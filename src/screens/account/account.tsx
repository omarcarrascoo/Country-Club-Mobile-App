import React, { FC, useContext, useEffect } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { Image, ScrollView } from 'react-native';
import { ClubemberTheme, Images } from '../../constants';
import ClubCardIconButton from '../../components/card/card-icon-button/card-icon-button';
import ClubTitleCard from '../../components/general/title-card/title-card';
import ClubButton from '../../components/general/buttons/button/button';
import ButtonCardSimple from '../../components/card/button-card-simple/button-card-simple';
import ClubContext from '../../context/context';
import { getTokenFromStorage } from '../../redux/setToken';
import { filterUserByEmail, getHijos, getUsers } from '../../redux/userRedux';

const Account: FC<any> = (props) => {
  const {state, onLoading, updateAuthorization, setUserData } = useContext(ClubContext);
  const { navigation } = props;
 

  const RenderAvatar = () =>{
    const profileFoto = `https://creator.zoho.com${state.user.Foto_Socio}`
    const headers = state.token.Authorization
    return(
      <Block style={styles.headSection}>
         <Image source={{uri:profileFoto, headers: {Authorization:headers }}} style={styles.avatar} />
      </Block>
    )
  }
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <Block row middle center style={styles.profileInfo}>
            <RenderAvatar/>
            <Block style={styles.headSection}>
              <Text
                style={styles.userName}
                color={ClubemberTheme.COLORS.PRIMARY}
              >
                {state.user.Nombre_Socio.display_value}
              </Text>
              <Text
                size={ClubemberTheme.SIZES.BASE * 0.775}
                color={ClubemberTheme.COLORS.SHADOW}
              >
                {state.user.Tipos_de_Membresias.display_value}
              </Text>
            </Block>
          </Block>

          <Block style={styles.subSection}>
            <ButtonCardSimple
              white
              action={() =>
                navigation.navigate('AccountStack', {
                  screen: 'ChangePassword'
                })
              }
              icon={'chevron-right'}
              iconFamily={'entypo'}
              label={'Contraseña'}
            />
          </Block>

          <Block style={styles.subSection2}>
            <ButtonCardSimple
              white
              action={() =>
                navigation.navigate('AccountStack', {
                  screen: 'PaymentMethods',
                  params: {
                    fromScreen: 'TournamentInscription'
                  }
                })
              }
              icon={'chevron-right'}
              iconFamily={'entypo'}
              label={'Mis metodos de pago'}
            />
          </Block>
          <Block style={styles.subSection2}>
            <ButtonCardSimple
              white
              action={() =>
                navigation.navigate('AccountStack', {
                  screen: 'Interests',
                  params: {
                    fromScreen: 'Interests'
                  }
                })
              }
              icon={'chevron-right'}
              iconFamily={'entypo'}
              label={'Intereses'}
            />
          </Block>
          <Block style={styles.subSection2}>
            <ButtonCardSimple
              
              white
              action={() =>
                navigation.navigate('AccountStack', {
                  screen: 'sportFav',
                  params: {
                    fromScreen: 'sportFav'
                  }
                })
              }
              icon={'chevron-right'}
              iconFamily={'entypo'}
              label={'Deportes'}
            />
          </Block>

          <Block
            middle
            style={{
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE
            }}
          >
            <ClubButton
              red
              outline
              shadowless
              style={{borderWidth: 1, borderColor: ClubemberTheme.COLORS.WARNING}}
              color={ClubemberTheme.COLORS.PRIMARY}
              onPress={() =>
                navigation.navigate('Auth', {
                  screen: 'Login'
                })
              }
              defaultButton
            >
              Cerrar sesión
            </ClubButton>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default Account;
