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
  renderTime,
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
          text: 'Message 2',
          name: "idk",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 21, 0)),
          user: {
            _id: 2,
            name: 'p2',
            text: 'whattap',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 2,
          text: 'Another Message',
          name: "bigboi",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 3,
            name: 'p3',
            text: 'whattap',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 3,
          text: 'id4',
          name: "ayyyooo",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 4,
            name: 'p4',
            text: 'whattap',
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
          renderTime={renderTime.bind(this)}
          renderSystemMessage={renderSystemMessage}
          renderMessage={renderMessage}
          renderMessageText={renderMessageText}
          // renderCustomView={renderCustomView}
          renderBubble={renderBubble}
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
