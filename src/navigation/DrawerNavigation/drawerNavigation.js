import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import createHomeTabs from '../TabNavigation/tabNavigation';

import CreateDrawerLogout from './logoutItem';
import Settings from '../../screens/Settings/settings';
const HomeDrawer = createDrawerNavigator();

const createHomeDrawer = () => (
  <HomeDrawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <CreateDrawerLogout {...props} />}>
    <HomeDrawer.Screen name="Home" children={createHomeTabs} />
    <HomeDrawer.Screen name="Settings" component={Settings} />
  </HomeDrawer.Navigator>
);

export default createHomeDrawer;
