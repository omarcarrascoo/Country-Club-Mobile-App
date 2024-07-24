import React, { FC } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableWithoutFeedback
} from 'react-native';
import { Block, Text } from 'galio-framework';
import { ClubemberTheme } from '../../constants';
import styles from './styles';
import { ICardItem } from '../../interfaces/interface';

interface ICard {
  item: ICardItem;
  horizontal?: boolean;
  full?: boolean;
  ctaColor?: string;
  imageStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<any>;
  action: () => void;
}
const ClubCard: FC<ICard> = ({
  item,
  horizontal,
  full,
  style,
  ctaColor,
  imageStyle,
  action
}) => {
  const imageStyles = [
    full ? styles.fullImage : styles.horizontalImage,
    imageStyle
  ];
  const cardContainer = [styles.card, styles.shadow, style];
  const imgContainer = [
    styles.imageContainer,
    horizontal
      ? styles.horizontalStyles
      : styles.verticalStyles,
    styles.shadow
  ];

  return (
    <Block row={horizontal} card flex style={cardContainer}>
      <TouchableWithoutFeedback onPress={action}>
        <Block flex style={imgContainer}>
          <Image
            source={{ uri: item.image }}
            style={imageStyles}
          />
        </Block>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={action}>
        <Block
          flex
          space="between"
          style={styles.cardDescription}
        >
          <Text size={14} style={styles.cardTitle}>
            {item.title}
          </Text>
          <Text
            size={12}
            muted={!ctaColor}
            color={ctaColor || ClubemberTheme.COLORS.ACTIVE}
            bold
          >
            {item.cta}
          </Text>
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
};

export default ClubCard;
