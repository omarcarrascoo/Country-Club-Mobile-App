import React, { FC } from 'react';
import { ClubemberTheme } from '../../../../constants';
import { ButtonProps, Text } from 'galio-framework';
import ClubButton from '../button/button';
import { FamilyType } from '../../../../interfaces/types';
import ClubIcon from '../icon/icon';

interface IClubIconTextButton extends ButtonProps {
  icon: string;
  text?: string;
  onPress: () => void;
  textSize?: number;
  white?: boolean;
  shadowlessBg?: boolean;
  iconFamily?: FamilyType;
}
const ClubIconTextButton: FC<IClubIconTextButton> = ({
  onPress,
  text,
  icon,
  textSize = ClubemberTheme.SIZES.BASE,
  iconFamily,
  shadowlessBg = false,
  ...props
}) => {
  return (
    <ClubButton
      {...props}
      onPress={onPress}
      style={[
        props.style,
        shadowlessBg && {
          shadowColor: ClubemberTheme.COLORS.SHADOW,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 4,
          shadowOpacity: 0.3
        }
      ]}
    >
      {text && (
        <Text
          style={{
            color: ClubemberTheme.COLORS.WHITE,
            fontSize: textSize
          }}
        >
          {text}
        </Text>
      )}
      <ClubIcon
        size={ClubemberTheme.SIZES.BASE_SECURE * 2.4}
        name={icon}
        iconFamily={iconFamily}
        color={ClubemberTheme.COLORS.WHITE}
      />
    </ClubButton>
  );
};

export default ClubIconTextButton;
