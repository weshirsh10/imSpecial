import React, {Component} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  SafeAreaView,
} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './messageContainer';

import {
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
} from './inputToolbar';

export default class GiftedChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    return (
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
          renderInputToolbar={renderInputToolbar}
          renderActions={renderActions}
          renderSend={renderSend}
          renderComposer={renderComposer}
          renderAvatar={renderAvatar}
          renderBubble={renderBubble}
          renderSystemMessage={renderSystemMessage}
          renderMessage={renderMessage}
          renderMessageText={renderMessageText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    width: '100%',
  },
});
