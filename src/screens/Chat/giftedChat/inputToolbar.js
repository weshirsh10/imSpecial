/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {InputToolbar, Actions, Composer, Send} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = require('../../../theme.json');
export const renderInputToolbar = props => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: theme.colors.secondary,
      paddingTop: 6,
      paddingRight: 10,
      borderTopColor: 'transparent',
    }}
    primaryStyle={{alignItems: 'center'}}
  />
);

export const renderActions = props => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
    }}
    icon={() => <Icon name="camera" color={theme.colors.primary} size={25} />}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor="#222B45"
  />
);

export const renderComposer = props => (
  <Composer
    {...props}
    placeholderTextColor={theme.colors.primary}
    textInputStyle={{
      color: theme.colors.dark,
      borderColor: theme.colors.primary,
      borderWidth: 2,
      backgroundColor: theme.colors.secondary,
      borderRadius: 10,
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
  />
);

export const renderSend = props => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }}>
     <Icon name="paper-plane" color={theme.colors.primary} size={25} />
  </Send>
);
