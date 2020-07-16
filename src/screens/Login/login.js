import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {Button} from 'react-native-elements';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const theme = require('../../theme.json');

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      loginText: 'login',
      signUpText: 'sign up',
    };
  }

  onPressSignUp = () => {
    this.setState({login: !this.state.login});
    !this.state.login
      ? this.setState({loginText: 'login', signUpText: 'sign up'})
      : this.setState({loginText: 'create', signUpText: 'login'});
  };

  onPressLogin = () => {
    console.log("Login Pressed")
    this.props.navigation.navigate('Home');
  };

  // onPressSignUp() {
  //   this.setState({login: false});
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              // resizeMode="contain"
              source={require('../../assets/imspecialLogo-01.png')}
            />
          </View>
          <View style={styles.formContainer}>
            {/* <LoginForm navigation={this.props.navigation} /> */}
            {this.state.login ? (
              <LoginForm navigation={this.props.navigation} />
            ) : (
              <SignUpForm />
            )}
            <Button
              title={this.state.loginText}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              onPress={this.onPressLogin}
            />
            <Button
              title={this.state.signUpText}
              buttonStyle={styles.signUpButton}
              titleStyle={styles.signUpTitle}
              onPress={this.onPressSignUp}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    // marginTop: Platform.OS == 'iox' ? '20px' : Stat,
    // justifyContent: 'center',
  },
  logoContainer: {
    // flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: theme.colors.light,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.secondary,
    fontWeight: '700',
  },
  signUpButton: {
    backgroundColor: null,
    padding: 10,
  },
  signUpTitle: {
    color: theme.colors.dark,
  },
});
