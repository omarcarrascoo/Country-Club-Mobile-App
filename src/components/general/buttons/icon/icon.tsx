import React, { FC, useEffect, useState } from 'react';
import { Icon, IconProps } from 'galio-framework';
import {
  IconFamilyType,
  FamilyType
} from '../../../../interfaces/types';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import argonConfig from '../../../../../assets/config/argon.json';

interface IClubIcon extends IconProps {
  name?: string;
  iconFamily?: FamilyType | string;
}
const ClubIcon: FC<IClubIcon> = ({
  name,
  iconFamily,
  ...rest
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const IconArgonExtra = createIconSetFromIcoMoon(
    argonConfig,
    'ArgonExtra',
    ''
  );

  const loadFont = async () => {
    await Font.loadAsync({
      ArgonExtra: require('../../../../../assets/font/argon.ttf')
    });
  };

  useEffect(() => {
    loadFont();
    setFontLoaded(true);
  }, []);

  if (fontLoaded && iconFamily === 'ArgonExtra') {
    return (
      <IconArgonExtra
        name={name}
        family={iconFamily}
        {...rest}
      />
    );
  }

  return (
    <Icon
      name={name}
      family={iconFamily as IconFamilyType}
      {...rest}
    />
  );
};

export default ClubIcon;
