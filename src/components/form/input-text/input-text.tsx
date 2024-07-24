import React, { FC } from 'react';
import { ClubemberTheme } from '../../../constants';
import { Input, InputProps } from 'galio-framework';
import styles from './styles';
import ClubIcon from '../../general/buttons/icon/icon';
import { FamilyType } from '../../../interfaces/types';

export interface IClubInputText extends InputProps {
  shadowless?: boolean;
  success?: boolean;
  error?: boolean;
  withIcon?: boolean;
  icon?: string;
  iconFamily?: FamilyType;
  iconStyle?: any;
  style?:any
}
const ClubInputText: FC<IClubInputText> = ({
  shadowless = false,
  success = false,
  warning = false,
  error = false,
  icon,
  iconFamily,
  iconStyle,
  withIcon = false,
  ...props
}) => {
  const inputStyles = [
    !shadowless && styles.shadow,
    success && styles.success,
    warning && styles.warning,
    error && styles.error,
    { ...props.style }
  ];

  return (
    <Input
      placeholderTextColor={ClubemberTheme.COLORS.MUTED}
      style={inputStyles}
      color={ClubemberTheme.COLORS.TEXT_GRAY}
      iconContent={
        withIcon && icon ? (
          <ClubIcon
            size={ClubemberTheme.SIZES.BASE * 0.875}
            color={ClubemberTheme.COLORS.ICON}
            name={icon}
            iconFamily={iconFamily}
            style={iconStyle}
          />
        ) : null
      }
      {...props}
    />
  );
};

export default ClubInputText;
