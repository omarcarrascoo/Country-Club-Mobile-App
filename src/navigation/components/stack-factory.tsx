import React, { FC, useState } from 'react';
import { Stack } from '../../utils/navigations-instances';
import { IChildrenStackScreen } from '../../components/menu/vertical-menu/interface';
import {
  appStackConfig,
  authStackConfig
} from '../configs';

const StackFactory: FC<any> = (props) => {
  const stackConfigName = props.stackName
    ? props.stackName
    : props.route.params?.stackConfig;
  const [childrenStack, _setChildrenStack] =
    useState<IChildrenStackScreen>(() => {
      if (stackConfigName === 'AppStack') {
        return appStackConfig.sections.find(
          (stack) => stack.routeName === props.route.name
        )?.childrenStack as IChildrenStackScreen;
      }

      if (stackConfigName === 'AuthStack') {
        return authStackConfig as IChildrenStackScreen;
      }

      return appStackConfig.sections.find(
        (stack) => stack.routeName === props.route.name
      )?.childrenStack as IChildrenStackScreen;
    });

  if (!childrenStack.screens.length) {
    return;
  }

  return (
    <Stack.Navigator
      initialRouteName={childrenStack.initialRouteName}
      screenOptions={childrenStack.screenOptions}
    >
      {childrenStack.screens.map((child, indexChild) => {
        return (
          <Stack.Screen
            key={`${child.routeName}-${indexChild}`}
            name={child.routeName}
            component={child.component}
            options={child.screenOptions}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackFactory;
