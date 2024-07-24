import React, { FC } from 'react';
import DrawerFactory from '../components/drawer-factory';
import { appStackConfig } from '../configs';

const AppStack: FC = () => {
  return <DrawerFactory stackConfig={appStackConfig} />;
};

export default AppStack;
