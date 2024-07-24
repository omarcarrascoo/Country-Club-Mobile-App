import React, { FC, useContext } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Block, NavBar, Text } from 'galio-framework';
import Icon from '../Icon';
import { ClubemberTheme, Images } from '../../constants';
import styles from './styles';
import { paddingTopHeader, widthCard } from '../../constants/utils';
import ClubIconButton from '../general/buttons/icon-button/icon-button';
import clubemberTheme from '../../constants/clubember-theme';
import ClubContext from '../../context/context';

const Header: FC<any> = ({
  withBack = false,
  back,
  title,
  white,
  transparent,
  bgColor,
  iconColor,
  titleColor,
  navigation,
  ...props
}) => {
  const { state } = useContext(ClubContext);
  const headerStyles = [
    styles.header,
    transparent
      ? { backgroundColor: 'rgba(0,0,0,0)' }
      : null,
    bgColor && { backgroundColor: bgColor },
    {
      paddingTop: paddingTopHeader
    }
  ];

  const navbarStyles = [styles.navbar];

  const handleLeftPress = () => {
    return withBack
      ? navigation.goBack()
      : navigation.toggleDrawer();
  };
  
  const renderNotificationsButton = () => (
    <TouchableOpacity
      style={styles.notifyButton}
      onPress={() =>
        navigation.navigate('NotificationList', {
          screen: 'NotificationsList'
        })
      }
    >
      <Icon
        family="ArgonExtra"
        size={18}
        name="bell"
        color={ClubemberTheme.COLORS.WHITE}
      />
      <Block style={styles.notify} />
    </TouchableOpacity>
  );
  const profileFoto = `https://creator.zoho.com${state.user.Foto_Socio}`
  const headers = state.token.Authorization
  const renderAvatar = () => (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
    >
      <Block flex middle>
        <Image
          source={{uri:profileFoto, headers: {Authorization:headers }}}
          style={[
            styles.avatar,
            withBack && {
              width: ClubemberTheme.SIZES.BASE * 1.8,
              height: ClubemberTheme.SIZES.BASE * 1.8
            }
          ]}
        />
      </Block>
    </TouchableOpacity>
  );

  const renderTitle = () => (
    <Block
      flex
      row
      middle
      style={{
        marginStart: ClubemberTheme.SIZES.BASE_SECURE * -1,
      }}
    >
      <Block left>
        <ClubIconButton
          style={{
            marginHorizontal: 0
          }}
          white
          name={'chevron-left'}
          iconFamily="entypo"
          onPress={handleLeftPress}
          shadowIcon={transparent}
        />
      </Block>
      <Block left middle>
        <Text
          color={clubemberTheme.COLORS.WHITE}
          bold
          size={ClubemberTheme.SIZES.BASE_SECURE * 1.2}
        >
          {title}
        </Text>
      </Block>
    </Block>
  );

  return (
    <Block style={headerStyles}>
      <NavBar
        back={withBack}
        title={!withBack ? 'El Encanto' : null}
        style={navbarStyles}
        transparent={transparent}
        right={
          <Block flex row>
            {withBack && !transparent && renderAvatar()}
            {!transparent && renderNotificationsButton()}
          </Block>
        }
        rightStyle={{ alignItems: 'flex-end' }}
        leftStyle={{ alignItems: 'flex-start' }}
        left={
          <Block flex={withBack && 1}>
            {withBack ? renderTitle() : renderAvatar()}
          </Block>
        }
        titleStyle={[
          styles.title,
          {
            color:
              ClubemberTheme.COLORS[
                white ? 'WHITE' : 'HEADER'
              ]
          },
          titleColor && { color: titleColor }
        ]}
        {...props}
      />
    </Block>
  );
};

export default Header;
