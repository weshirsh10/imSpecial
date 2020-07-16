import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home/home';
import ChatComponent from '../../screens/Chat/ChatComponent';
const ChatStack = createStackNavigator();

const createChatStack = () => (
  <ChatStack.Navigator screenOptions={{headerShown: false}}>
    <ChatStack.Screen
      name="Home"
      component={Home}
      options={{gestureEnabled: false}}
    />
    <ChatStack.Screen
      name="Chat"
      component={ChatComponent}
      options={{gestureEnabled: false}}
    />
  </ChatStack.Navigator>
);

export default createChatStack;
