import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from './Main';
import {AccountResumeScreen} from '../../../../utils/screenNames';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AccountResumeScreen.MAIN_ACCOUNT_RESUME_PAGE}>
      <Stack.Screen
        name={AccountResumeScreen.MAIN_ACCOUNT_RESUME_PAGE}
        component={Main}
      />
    </Stack.Navigator>
  );
}
