import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Screen} from './src/utils/screenNames';
import {Provider} from 'react-redux';
import dataStore from './src/store/dataStore';
import Login from './src/screens/Login';
import {Pallet} from './src/utils/colorPallet';
import {Fonts} from './src/utils/fontSpecs';

const fonts = {
  android: {
    regular: {
      fontFamily: Fonts.SAIRA_EC_REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: Fonts.SAIRA_EC_MEDIUM,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: Fonts.SAIRA_EC_LIGHT,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: Fonts.SAIRA_EC_THIN,
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Pallet.primaryColorDarker,
    accent: Pallet.accentColor,
    background: Pallet.white,
  },
  fonts: configureFonts(fonts),
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={dataStore}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Screen.SPLASHSCREEN_PAGE}
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={Screen.SPLASHSCREEN_PAGE}
              component={SplashScreen}
            />
            <Stack.Screen name={Screen.HOME_PAGE} component={Home} />
            <Stack.Screen name={Screen.LOGIN_PAGE} component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
