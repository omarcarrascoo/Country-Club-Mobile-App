import React, {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Block, GalioProvider } from 'galio-framework';
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import NavigationScreen from './src/navigation/navigation-screens';
import { ClubemberTheme } from './src/constants';
import { loadAssets } from './src/utils/load-assets';
import { loadFonts } from './src/utils/load-fonts';
import ClubProvider from './src/context/provider';
import { setTokenInStorage } from './src/redux/setToken';

enableScreens();

export default function App() {
  
  const [appIsReady, setAppIsReady] = useState(false);
  const navigationRef = useNavigationContainerRef();





  const readyApp = async () => {
    try {
      console.log(
        'Trigger the Splash Screen visible till this try block resolves the promise'
      );
      await SplashScreen.preventAutoHideAsync();
      await loadAssets();
      await loadFonts();
      // await updateToken()
      await setTokenInStorage()
      await new Promise((resolve) =>
        // @ts-ignore
        setTimeout(resolve, 1000)
      );
    } catch (e) {
      console.warn(e);
    } finally {
      
      console.log('Render the application screen');
      setAppIsReady(true);
    }
  };
  
  useEffect(() => {
    
    readyApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onLayoutRootView}
    >
      <GalioProvider theme={ClubemberTheme}>
        <ClubProvider navigation={navigationRef}>
          <Block flex={true}>
            <NavigationScreen />
          </Block>
        </ClubProvider>
      </GalioProvider>
    </NavigationContainer>
  );
}
