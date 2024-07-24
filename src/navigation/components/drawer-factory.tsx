import React, { FC } from 'react';
import { Drawer } from '../../utils/navigations-instances';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import VerticalMenu from '../../components/menu/vertical-menu/vertical-menu';
import StackFactory from './stack-factory';
import { IDrawerStack } from '../../components/menu/vertical-menu/interface';

interface IDrawerFactory {
  stackConfig: IDrawerStack;
}
const DrawerFactory: FC<IDrawerFactory> = ({
  stackConfig
}) => {
  return (
    <Drawer.Navigator
      drawerContent={(
        props: DrawerContentComponentProps
      ) => (
        <VerticalMenu
          {...props}
          sections={stackConfig.sections}
        />
      )}
      screenOptions={stackConfig.screenOptions}
      initialRouteName={stackConfig.initialRouteName}
    >
      {stackConfig.sections.map((item, index) => {
        return (
          <Drawer.Screen
            key={`${item.routeName}-${index}`}
            name={item.routeName}
            options={item.drawerOptions}
            component={
              item.childrenStack
                ? StackFactory
                : (item.component as any)
            }
            initialParams={{
              stackConfig: stackConfig.stackName
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerFactory;
