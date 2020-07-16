import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Avatar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import GiftedChatComponent from './giftedChat/GiftedChat';
const theme = require('../../theme.json');

export default class ChatComponent extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      loginText: 'login',
      signUpText: 'sign up',
    };
  }

  componentDidMount() {
    this.props.navigation
      .dangerouslyGetParent()
      .setOptions({tabBarVisible: false});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="chevron-left"
            color={theme.colors.primary}
            size={25}
            onPress={() => {
              this.props.navigation
                .dangerouslyGetParent()
                .setOptions({tabBarVisible: true});
              this.props.navigation.goBack();
            }}
          />
          <Avatar
            rounded
            containerStyle={{marginLeft: 15, marginRight: 5}}
            overlayContainerStyle={{backgroundColor: theme.colors.light}}
            title={this.props.route.params.avatar}
          />
          <Text style={theme.text.headerText}>
            {this.props.route.params.name}
          </Text>
        </View>
        <View style={styles.chatContainer}>
          <GiftedChatComponent/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    // marginTop: Platform.OS == 'iox' ? '20px' : Stat,
    // justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
  },
  search: {
    marginLeft: 5,
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
  searchInputContainer: {
    borderWidth: 0,
    backgroundColor: theme.colors.light,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  chatContainer: {
    width: '100%',
    height: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  giftedChat: {
    width: '100%',
  }
});
