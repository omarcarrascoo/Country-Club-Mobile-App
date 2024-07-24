import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { FamilyType } from '../../../interfaces/types';
import ClubIcon from '../../general/buttons/icon/icon';

interface IClubCardIconButton {
  icon: string;
  iconFamily: FamilyType;
  label: string;
  white?: boolean;
  action: () => void;
}
const ClubCardIconButton: FC<IClubCardIconButton> = ({
  action,
  icon,
  iconFamily,
  label,
  white = false
}) => {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <Block
        row
        card
        style={[
          styles.card,
          white && {
            backgroundColor: ClubemberTheme.COLORS.WHITE,
            shadowColor: ClubemberTheme.COLORS.SHADOW,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.05,
            elevation: 2,
            borderWidth: 2,
            borderColor: ClubemberTheme.COLORS.DEFAULT
          }
        ]}
      >
        <Block
          middle
          right
          center
          style={[
            {
              width: '10%'
            }
          ]}
        >
          <ClubIcon
            name={icon}
            iconFamily={iconFamily}
            color={ClubemberTheme.COLORS.DEFAULT}
            size={ClubemberTheme.SIZES.BASE}
          />
        </Block>
        <Block
          left
          middle
          style={{
            paddingStart: ClubemberTheme.SIZES.BASE_SECURE / 2,
            width: '80%'
          }}
        >
          <Text
            size={ClubemberTheme.SIZES.BASE}
            style={styles.cardTitle}
            color={ClubemberTheme.COLORS.DEFAULT}
          >
            {label}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ClubCardIconButton;
