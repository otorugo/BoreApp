import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import {Screen} from './src/utils/screenNames';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screen.SPLASHSCREEN_PAGE}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={Screen.SPLASHSCREEN_PAGE}
            component={SplashScreen}
          />
          <Stack.Screen name={Screen.HOME_PAGE} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
