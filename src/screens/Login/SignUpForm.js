import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, ThemeConsumer} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const theme = require('../../theme.json');


export default class SignUpForm extends Component {
  onPressSignUp = () => {
    console.log('PResseing signup');
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
          <Input
          placeholder="name"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}

          placeholderTextColor={theme.colors.light}
          leftIcon={<Icon name="lock" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="email"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}

          placeholderTextColor={theme.colors.light}
          leftIcon={<Icon name="envelope" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}

          placeholderTextColor={theme.colors.light}
          leftIcon={<Icon name="lock" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="verify Password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}

          placeholderTextColor={theme.colors.light}
          leftIcon={<Icon name="lock" size={24} color={theme.colors.secondary} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginLeft: 5,
    color: theme.colors.secondary,
  },
  button: {
    backgroundColor: '#8d86c9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#f7ece1',
    fontWeight: '700',
  },
  signUpButton: {
    backgroundColor: null,
    padding: 10,
  },
  signUpTitle: {
    color: '#242038',
  },
  inputContainer: {
    borderColor: theme.colors.secondary
  }
});
