import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import { Image } from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';

interface IClubSimpleCard {
  image?: string;
  title: string;
  description: string;
  white?: boolean;
}
const ClubSimpleCard: FC<IClubSimpleCard> = ({
  image,
  title,
  description,
  white = false
}) => {
  const renderTopImage = () => (
    <Block>
      <Image
        source={{ uri: image }}
        style={styles.topImage}
      />
    </Block>
  );

  return (
    <Block
      card
      style={[
        styles.card,
        white && {
          backgroundColor: ClubemberTheme.COLORS.WHITE,
          shadowColor: ClubemberTheme.COLORS.SHADOW,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 0.2,
          elevation: 2,
          marginBottom: 4
        }
      ]}
    >
      <Block flex row>
        {image && (
          <Block
            flex={0.4}
            style={[styles.cardDescription]}
          >
            {renderTopImage()}
          </Block>
        )}

        <Block flex={0.6} style={styles.cardContent}>
          <Block style={[styles.cardDescription]}>
            <Text
              size={ClubemberTheme.SIZES.BASE}
              style={styles.cardTitle}
              color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
            >
              {title}
            </Text>
          </Block>

          <Block style={[styles.cardDescription]}>
            <Text
              size={ClubemberTheme.SIZES.BASE * 0.75}
              style={styles.cardSubTitle}
              color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
            >
              {description}
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export { ClubSimpleCard };
