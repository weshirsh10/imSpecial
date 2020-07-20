import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const theme = require('../../theme.json');

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  toggleCheck = () => {
    this.setState({checked: !this.state.checked}, () => {
      this.props.toggleAccount(this.state.checked);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="name"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={theme.colors.light}
          onChangeText={text => {
            this.props.onType(text, 'name');
          }}
          leftIcon={<Icon name="lock" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="email"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={theme.colors.light}
          onChangeText={text => {
            this.props.onType(text, 'email');
          }}
          leftIcon={<Icon name="envelope" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={theme.colors.light}
          onChangeText={text => {
            this.props.onType(text, 'password');
          }}
          leftIcon={<Icon name="lock" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="verify Password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={theme.colors.light}
          onChangeText={text => {
            this.props.onType(text, 'verifyPass');
          }}
          leftIcon={
            <Icon name="lock" size={24} color={theme.colors.secondary} />
          }
        />
        <View style={styles.checkBoxView}>
          <CheckBox
            title="Are you a parent or gaurdian?"
            checked={this.state.checked}
            onPress={this.toggleCheck}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
            checkedColor={theme.colors.secondary}
          />
        </View>
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
    borderColor: theme.colors.secondary,
  },
  checkBoxContainer: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0,
  },
  checkBoxText: {
    color: theme.colors.secondary,
  },
  checkBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
