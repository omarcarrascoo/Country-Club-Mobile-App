import React, { FC, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import ClubIcon from '../../general/buttons/icon/icon';
import ClubIconButton from '../../general/buttons/icon-button/icon-button';

interface IClubMoneyCard {
  value: string;
  titleSize?: number;
  action: () => void;
}
const ClubMoneyCard: FC<IClubMoneyCard> = ({ value, titleSize, action }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={action}>
      <Block card flex style={styles.card}>
        <LinearGradient
          colors={[
            ClubemberTheme.COLORS.BACKGROUND_BUTTON_CARD_PRIMARY,
            ClubemberTheme.COLORS.WHITE
          ]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 2.8, y: 0.2 }}
          style={styles.gradiantCard}
        >
          <Block flex row style={styles.cardDescription}>
            <Block middle>
              <ClubIcon
                name={'credit'}
                iconFamily={'entypo'}
                color={ClubemberTheme.COLORS.WHITE}
                size={titleSize || ClubemberTheme.SIZES.BASE}
              />
            </Block>

            <Block middle>
              <Text
                size={titleSize || ClubemberTheme.SIZES.BASE}
                style={styles.cardTitle}
                color={ClubemberTheme.COLORS.WHITE}
              >
                {isShow ? value : '******'}
              </Text>
            </Block>

            <Block middle>
              <ClubIconButton
                style={{
                  marginStart: ClubemberTheme.SIZES.BASE_SECURE
                }}
                name={isShow ? 'eye-with-line' : 'eye'}
                iconFamily={'entypo'}
                iconColor={ClubemberTheme.COLORS.BACKGROUND_BASE}
                size={(titleSize || ClubemberTheme.SIZES.BASE) * 0.725}
                onPress={() => setIsShow(!isShow)}
              />
            </Block>
          </Block>
        </LinearGradient>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ClubMoneyCard;
