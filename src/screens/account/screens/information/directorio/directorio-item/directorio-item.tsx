import React, { FC, useContext } from 'react';
import { Block, Text } from 'galio-framework';
import { Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { ClubemberTheme, Images } from '../../../../../../constants';
import ClubContext from '../../../../../../context/context';

interface IDirectorio {
  name: string,
  number: string,
  position: string,
  image: string
}
const DirectorioItem: FC<IDirectorio> = ( {name, number, position, image}) => {
  const { state } = useContext(ClubContext);
  const profileImage = `https://creator.zoho.com${image}`
  const headers = state.token.Authorization  
  const handlePhonePress = () => {
    Linking.openURL(`tel:${number}`);
  };

  const handleWhatsAppPress = () => {
    Linking.openURL(`https://wa.me/${number}`);
  };

  return (
    <Block row middle center space='between' style={styles.profileInfo}>
      <Block row>
        <Block style={styles.headSection}>
          <Image source={{uri: profileImage,  headers: {Authorization: headers}}} style={styles.avatar} />
        </Block>

        <Block style={styles.headSection}>
          <Text style={styles.userName} color={ClubemberTheme.COLORS.PRIMARY}>
            {name}
          </Text>
          <Text size={ClubemberTheme.SIZES.BASE * 0.70} color={ClubemberTheme.COLORS.SHADOW}>
            {position}
          </Text>
        </Block>
      </Block>

      <Block row style={{paddingRight: ClubemberTheme.SIZES.BASE_SECURE / 2, backgroundColor: "transparent"}}>
        <TouchableOpacity onPress={handlePhonePress}>
          <Image source={Images.Phone} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleWhatsAppPress}>
          <Image source={Images.Whatsapp2Logo} style={styles.image} />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default DirectorioItem;
