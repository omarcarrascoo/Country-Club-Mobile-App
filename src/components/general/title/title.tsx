import React, { FC } from 'react';
import { ClubemberTheme } from '../../../constants';
import { Text } from 'galio-framework';

const ClubTitle: FC<{
  children: any;
  size?: number;
  style?: any;
}> = ({
  children,
  size = ClubemberTheme.SIZES.BASE * 2,
  style
}) => {
  return (
    <Text
      left
      size={size}
      style={{
        fontFamily: 'SanFrancisoBold',
        paddingBottom: 10,
        ...style
      }}
      color={ClubemberTheme.COLORS.DEFAULT}
    >
      {children}
    </Text>
  );
};

export default ClubTitle;
