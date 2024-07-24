import React, { FC } from 'react';
import { styles } from './styles';
import { ClubemberTheme } from '../../../../constants';
import ClubIcon from '../icon/icon';
import { FamilyType } from '../../../../interfaces/types';
import ClubButton from '../button/button';

interface IClubIconButton {
  name: string;
  onPress: () => void;
  size?: number;
  white?: boolean;
  iconFamily?: FamilyType;
  iconColor?: string;
  shadowIcon?: boolean;
  style?: any;
}
const ClubIconButton: FC<IClubIconButton> = ({
  onPress,
  name,
  size = ClubemberTheme.SIZES.BASE_SECURE * 2.4,
  white = false,
  iconFamily,
  iconColor = ClubemberTheme.COLORS.ICON,
  shadowIcon = false,
  style
}) => (
  <ClubButton
    style={[
      {
        ...styles.iconButton,
        width: size + 3,
        height: size + 3
      },
      shadowIcon && styles.iconShadow,
      style
    ]}
    color={ClubemberTheme.COLORS.TRANSPARENT}
    onPress={onPress}
    shadowless
  >
    <ClubIcon
      name={name}
      size={size}
      iconFamily={iconFamily}
      color={
        white ? ClubemberTheme.COLORS.WHITE : iconColor
      }
    />
  </ClubButton>
);

export default ClubIconButton;
