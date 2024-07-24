import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import { TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import ClubIcon from '../../general/buttons/icon/icon';
import { FamilyType } from '../../../interfaces/types';

interface IClubIconCard {
  title: string;
  icon: string;
  iconFamily: FamilyType | string;
  action: () => void;
  white?: boolean;
  bigCard?:boolean
}
const ClubIconCard: FC<IClubIconCard> = ({
  title,
  action,
  icon,
  iconFamily,
  white,
  bigCard
}) => {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <Block
        flex
        card
        style={[
          bigCard? styles.bigCard : styles.card,
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
        <Block flex style={styles.cardDescription}>
          <ClubIcon
            style={{
              paddingVertical:
                ClubemberTheme.SIZES.BASE_SECURE
            }}
            size={ClubemberTheme.SIZES.BASE_SECURE * 1.6}
            name={icon}
            iconFamily={iconFamily}
            color={ClubemberTheme.COLORS.ICON_PRIMARY}
          />
          <Text
            size={ClubemberTheme.SIZES.BASE * 0.75}
            style={styles.cardTitle}
            color={
              ClubemberTheme.COLORS.SUBTITLE_SHORT_CARD
            }
          >
            {title}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ClubIconCard;
