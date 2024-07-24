import React, { FC } from 'react';
import { Block } from 'galio-framework';
import { Image } from 'react-native';
import { heightScreen, widthScreen } from '../../constants/utils';
import ClubTitle from '../../components/general/title/title';
import { ClubemberTheme, Images } from '../../constants';

const ClubLoading: FC<{ loadingText?: string }> = ({
  loadingText = 'Cargando'
}) => {
  return (
    <Block
      center
      middle
      style={{
        backgroundColor: ClubemberTheme.COLORS.WHITE,
        width: widthScreen,
        height: heightScreen
      }}
    >
      <Image source={Images.Loader} style={{ width: 100, height: 100 }} />
      <ClubTitle
        size={ClubemberTheme.SIZES.BASE}
        style={{
          paddingTop: ClubemberTheme.SIZES.BASE * 1.5
        }}
      >
        {loadingText}
      </ClubTitle>
    </Block>
  );
};

export default ClubLoading;
