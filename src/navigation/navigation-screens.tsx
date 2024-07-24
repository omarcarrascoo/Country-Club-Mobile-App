import React, { FC, useContext } from 'react';
import HomeBanner from '../screens/banner/home-banner/home-banner';
import AppStack from './stack/app-stack';
import { Stack } from '../utils/navigations-instances';
import AuthStack from './stack/auth-stack';
import ClubLoading from '../screens/loading/loading';
import ClubContext from '../context/context';

const NavigationScreen: FC = () => {
  const { state } = useContext(ClubContext);

  return (
    <>
      {state.loading && <ClubLoading />}
      <Stack.Navigator
        screenOptions={({}) => ({
          mode: 'card',
          headerShown: false
        })}
      >
        <Stack.Screen
          name="HomeBanner"
          component={HomeBanner}
          options={{
            headerTransparent: true
          }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            headerTransparent: true
          }}
        />
        <Stack.Screen
          name="App"
          component={AppStack}
          options={{
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default NavigationScreen;
