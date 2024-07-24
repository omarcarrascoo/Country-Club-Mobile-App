import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import { TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

interface IClubButtonCard {
  indexMap: number;
  title: string;
  description: string;
  action: () => void;
}
const ClubButtonCard: FC<IClubButtonCard> = ({
  indexMap,
  title,
  description,
  action
}) => {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <Block flex card style={styles.card}>
        <LinearGradient
          colors={[
            indexMap % 2 === 0
              ? ClubemberTheme.COLORS
                  .BACKGROUND_BUTTON_CARD_PRIMARY
              : ClubemberTheme.COLORS
                  .BACKGROUND_BUTTON_CARD_SECONDARY,
            ClubemberTheme.COLORS.WHITE
          ]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 2.8, y: 0.2 }}
          style={styles.gradiantCard}
        >
          <Block
            flex
            left
            middle
            style={styles.cardDescription}
          >
            <Text
              style={styles.cardTitle}
              color={ClubemberTheme.COLORS.WHITE}
            >
              {title}
            </Text>
          </Block>

          <Block
            flex
            left
            middle
            style={styles.cardDescription}
          >
            <Text
              size={ClubemberTheme.SIZES.BASE * 0.75}
              style={styles.cardSubTitle}
              color={ClubemberTheme.COLORS.WHITE}
            >
              {description}
            </Text>
          </Block>
        </LinearGradient>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ClubButtonCard;
