import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import {TouchableWithoutFeedback, View} from 'react-native';
import { ClubemberTheme } from '../../../constants';
import ClubIconButton from '../../general/buttons/icon-button/icon-button';

interface IClubLargeCard {
  action: () => void;
  title: string;
  subtitle: string | null;
  description?: string;
  white?: boolean;
  isBackgroundColor?: boolean;
  icon?: string,
  iconColor? : string
}
const ClubLargeCard: FC<IClubLargeCard> = ({
  action,
  title,
  subtitle,
  description,
  white = false,
  isBackgroundColor = false,
  icon,
  iconColor
}) => {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <Block
        row
        card
        flex
        space="between"
        style={[
          styles.card,
          white && {
            backgroundColor: ClubemberTheme.COLORS.WHITE,
            shadowColor: ClubemberTheme.COLORS.SHADOW,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.05,
            elevation: 2
          }
        ]}
      >
        <Block flex={0.16} center middle>
          <ClubIconButton
            style={[
              styles.icon,
              white && {
                backgroundColor:
                iconColor ? iconColor :
                  ClubemberTheme.COLORS.BORDER
              }
            ]}
            iconColor={
              white
                ? ClubemberTheme.COLORS.WHITE
                : ClubemberTheme.COLORS.ICON_DARK
            }
            iconFamily={'antdesign'}
            size={ClubemberTheme.SIZES.BASE * 0.75}
            name={icon ? icon : 'calendar'}
            onPress={() => null}
          />
        </Block>
        <Block
          flex={description ? 0.5 : 0.6}
          left
          middle
          style={styles.cardDescription}
        >
          <Text
            size={ClubemberTheme.SIZES.BASE * .7}
            style={styles.cardTitle}
            color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
          >
            {title}
          </Text>
        </Block>
        <Block
          flex={description ? 0.4 : 0.3}
          left
          middle
          style={styles.cardDescription}
        >
          <Text
            size={ClubemberTheme.SIZES.BASE * 0.65}
            style={isBackgroundColor ? styles.cardBackgroundSubTitle : styles.cardSubTitle}
            color={
              ClubemberTheme.COLORS.SUBTITLE_SHORT_CARD
            }
          >
            {subtitle}
          </Text>

          {description && (
            <Text
              size={ClubemberTheme.SIZES.BASE * 0.6}
              style={[
                styles.cardSubTitle,
                {
                  paddingTop:
                    ClubemberTheme.SIZES.BASE_SECURE / 2
                }
              ]}
              color={
                ClubemberTheme.COLORS.SUBTITLE_SHORT_CARD
              }
            >
              {description}
            </Text>
          )}
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ClubLargeCard;
