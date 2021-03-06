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

import {Button} from 'react-native-elements';

const theme = require('../../theme.json');

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      loginText: 'login',
      signUpText: 'sign up',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={styles.container}>
          <Text>Explore page</Text>
          <Text>-Chat with someone based on their location</Text>
          <Text>-Chat with someone based on their Sports</Text>
          <Text>-News feed: see images and posts of friends</Text>
          <Text>-Post an image</Text>
          <Text>-Post a status</Text>

        </KeyboardAwareScrollView>
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
});
