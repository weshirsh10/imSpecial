import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import createChatStack from '../ChatNavigation/chatNavigation';
import Feed from '../../screens/Feed/feed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSafeArea} from 'react-native-safe-area-context';

const theme = require('../../theme.json');
const HomeTabs = createBottomTabNavigator();

const getTabBarVisibility = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'Chat') {
    return false;
  }

  return true;
};

const createHomeTabs = () => (
  <HomeTabs.Navigator
    initialRouteName="Chats"
    tabBarOptions={{
      style: {
        backgroundColor: theme.colors.secondary,
        borderTopColor: 'transparent',
      },
      activeTintColor: theme.colors.primary,
      inactiveTintColor: theme.colors.light,
      activeBackgroundColor: theme.colors.secondary,
      inactiveBackgroundColor: theme.colors.secondary,
    }}>
    <HomeTabs.Screen
      name="Chats"
      children={createChatStack}
      options={{
        tabBarLabel: 'chats',
        tabBarIcon: ({color, size}) => (
          <Icon name="comment" color={color} size={size} />
        ),
      }}
    />
    <HomeTabs.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarLabel: 'explore',
        tabBarIcon: ({color, size}) => (
          <Icon name="globe" color={color} size={size} />
        ),
      }}
    />
  </HomeTabs.Navigator>
);

export default createHomeTabs;
