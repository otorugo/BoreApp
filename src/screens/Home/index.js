import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountResume from './sub-screens/account-resume';
import {HomeScreen} from '../../utils/screenNames';
import Config from './sub-screens/config';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={HomeScreen.ACCOUNT_RESUME_PAGE}
        options={{title: 'Home'}}
        component={AccountResume}
      />
      <Tab.Screen
        name={HomeScreen.CONFIG_PAGE}
        options={{title: 'Config'}}
        component={Config}
      />
    </Tab.Navigator>
  );
}
