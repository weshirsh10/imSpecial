import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const theme = require('../../theme.json')

export default class LoginForm extends Component {
  onPressSignUp = () => {
    console.log('PResseing signup');
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="username or email"
          placeholderTextColor={theme.colors.light}
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          leftIcon={<Icon name="user" size={24} color="#F7ECE1" />}
        />
        <Input
          placeholder="password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={theme.colors.light}
          leftIcon={<Icon name="lock" size={24} color="#F7ECE1" />}
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
  inputContainer: {
    borderColor: theme.colors.secondary
  }
});
