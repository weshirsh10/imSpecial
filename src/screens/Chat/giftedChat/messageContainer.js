import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
  Bubble,
  SystemMessage,
  Message,
  MessageText,
  Time,
} from 'react-native-gifted-chat';

const theme = require('../../../theme.json');

export const renderAvatar = props => {
  return (
    <Avatar
      rounded
      overlayContainerStyle={{backgroundColor: theme.colors.light}}
      title={props.currentMessage.user.name}
    />
  );
};

export const renderTime = props => {
  return (
    <Time
      {...props}
      timeTextStyle={{
        left: {color: theme.colors.dark},
        right: {color: theme.colors.dark},
      }}
    />
  );
};

export const renderBubble = props => {
  return (
    <Bubble
      {...props}
      renderCustomView={props => <Text>{props.currentMessage.user.name}</Text>}
      // renderUsername={props => <Text>{props.currentMessage.name}</Text>}
      // renderTime={props => <Time {...props} textStyle={{left: {color: 'red'}}} />}
      // renderTicks={() => <Text>Ticks</Text>}
      //   containerStyle={{
      //     left: {backgroundColor: theme.colors.primary},
      //     right: {},
      //   }}
      wrapperStyle={{
        left: {backgroundColor: theme.colors.secondary},
        right: {backgroundColor: theme.colors.secondary},
      }}
      // bottomContainerStyle={{
      //   left: {borderColor: 'purple', borderWidth: 4},
      //   right: {},
      // }}
      // tickStyle={{}}
      usernameStyle={{color: 'blue', fontWeight: '100'}}
      // containerToNextStyle={{
      //   left: {borderColor: 'navy', borderWidth: 4},
      //   right: {},
      // }}
      // containerToPreviousStyle={{
      //   left: {borderColor: 'mediumorchid', borderWidth: 4},
      //   right: {},
      // }}
      tickStyle={{left: {borderWidth: 5}}}
    />
  );
};

export const renderSystemMessage = props => (
  <SystemMessage
    {...props}
    containerStyle={{backgroundColor: 'pink'}}
    wrapperStyle={{borderWidth: 10, borderColor: 'white'}}
    textStyle={{color: 'crimson', fontWeight: '900'}}
  />
);

export const renderMessage = props => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    // containerStyle={{
    // //   left: {backgroundColor: 'lime'},
    // //   right: {backgroundColor: 'gold'},
    // }}
  />
);

export const renderMessageText = props => (
  <MessageText
    {...props}
    containerStyle={{
      left: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        // borderWidth: 2,
        // borderColor: theme.colors.primary,
      },
      right: {
        backgroundColor: theme.colors.light,
        borderRadius: 10,
        // borderWidth: 2,
        // borderColor: theme.colors.primary,
      },
    }}
    textStyle={{
      left: {color: theme.colors.secondary},
      right: {color: theme.colors.secondary},
    }}
    linkStyle={{
      left: {color: 'orange'},
      right: {color: 'orange'},
    }}
    customTextStyle={{fontSize: 20, lineHeight: 24}}
  />
);

export const renderCustomView = name => {
  return (
    <View style={{minHeight: 20, backgroundColor: theme.colors.secondary}}>
      <Text style={{color: theme.colors.dark}}>{name}</Text>
    </View>
  );
};
