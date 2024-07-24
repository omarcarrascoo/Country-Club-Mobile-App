import Header from '../../components/header/header';
import { ClubemberTheme } from '../../constants';
import React from 'react';
import { widthScreen } from '../../constants/utils';

export const generalDrawerOptions = {
  drawerStyle: {
    backgroundColor: 'white',
    width: widthScreen * 0.8
  },
  drawerActiveBackgroundColor: 'transparent',
  drawerActiveTintColor: 'white',
  drawerInactiveTintColor: 'white',
  drawerItemStyle: {
    width: widthScreen * 0.1,
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  drawerLabelStyle: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'normal'
  }
};
export const generalScreenOptions = (title: string) => ({
  header: ({ navigation, ...props }: any) => (
    <Header
      {...{
        navigation,
        withBack: true,
        title: title,
        bgColor: ClubemberTheme.COLORS.BACKGROUND_HEADER,
        ...props
      }}
    />
  ),
  cardStyle: {
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE
  },
  headerTransparent: false
});

export const previewScreenOptions = () => ({
  header: ({ navigation, ...props }: any) => (
    <Header
      {...{
        navigation,
        transparent: true,
        withBack: true,
        title: '',
        bgColor: ClubemberTheme.COLORS.TRANSPARENT,
        ...props
      }}
    />
  ),
  cardStyle: {
    backgroundColor: ClubemberTheme.COLORS.TEXT_GRAY_NORMAL
  },
  headerTransparent: true
});

export const transparentScreenOptions = (
  title: string
) => ({
  header: ({ navigation, ...props }: any) => (
    <Header
      {...{
        navigation,
        title: title,
        bgColor: ClubemberTheme.COLORS.BACKGROUND_HEADER,
        ...props
      }}
    />
  ),
  cardStyle: {
    backgroundColor: ClubemberTheme.COLORS.BACKGROUND_BASE
  },
  headerTransparent: false
});
