import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CountResume from './sub-screens/CountResume';
import {Screen} from '../../utils/screenNames';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Screen.COUNT_RESUME_PAGE} component={CountResume} />
    </Tab.Navigator>
  );
}
