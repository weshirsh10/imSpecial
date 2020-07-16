import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/login';
import createHomeDrawer from '../DrawerNavigation/drawerNavigation';
const Stack = createStackNavigator();

const createMainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen
      name="Home"
      children={createHomeDrawer}
      options={{gestureEnabled: false}}
    />
  </Stack.Navigator>
);

export default createMainStack;
