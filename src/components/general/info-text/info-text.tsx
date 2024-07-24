import React, { FC } from 'react';
import { ClubemberTheme } from '../../../constants';
import { Text } from 'galio-framework';

const ClubInfoText: FC<{
  error?: boolean;
  children: any;
  style?: any;
  size?: number;
}> = ({
  error = false,
  children,
  style,
  size = ClubemberTheme.SIZES.BASE * 0.75
}) => {
  return (
    <Text
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE * 0.5
        },
        style
      ]}
      color={
        error
          ? ClubemberTheme.COLORS.INPUT_ERROR
          : ClubemberTheme.COLORS.TEXT_GRAY_NORMAL
      }
      size={size}
    >
      {children}
    </Text>
  );
};

export default ClubInfoText;
