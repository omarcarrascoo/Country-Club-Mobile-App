import React, { FC } from 'react';
import { ClubemberTheme } from '../../../constants';
import { Text } from 'galio-framework';

interface IClubLabelForm {
  text: string;
  noPadding?: boolean;
  size?: number;
}
const ClubLabelForm: FC<IClubLabelForm> = ({
  text,
  noPadding = false,
  size
}) => {
  return (
    <Text
      left
      size={size ? size : ClubemberTheme.SIZES.BASE * 0.75}
      style={{
        fontFamily: 'SanFrancisoBold',
        paddingBottom: !noPadding
          ? ClubemberTheme.SIZES.BASE / 2
          : 0
      }}
      color={ClubemberTheme.COLORS.DEFAULT}
    >
      {text}
    </Text>
  );
};

export default ClubLabelForm;
