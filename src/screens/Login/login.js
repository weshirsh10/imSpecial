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
import auth from '@react-native-firebase/auth';

import {createAccount} from '../../firebase/auth';

import {Button} from 'react-native-elements';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Splash from '../Splash/splash';

const theme = require('../../theme.json');

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      loginText: 'login',
      signUpText: 'sign up',
      initializing: true,
      user: '',
      gaurdianAccount: true,
      name: '',
      email: '',
      password: '',
      verifyPass: '',
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(async user => {
      console.log('User', user);
      await this.setState({initializing: false});
      if (user) {
        console.log('Wes got a user', user);
        this.props.navigation.navigate('Home');
      } else {
        console.log('No User in this piece');
      }
    });
  }

  toggleGaurdianAccount = checked => {
    this.setState({gaurdianAccount: checked});
  };

  onTypeInput = (text, type) => {
    console.log('Text', [text, type]);

    switch (type) {
      case 'name':
        this.setState({name: text});
        break;
      case 'email':
        this.setState({email: text});
        break;
      case 'password':
        this.setState({password: text});
        break;
      case 'verifyPass':
        this.setState({verifyPass: text});
        break;
    }
  };

  onPressLogin = () => {
    if (this.state.login) {
      console.log('Login Pressed');
    } else {
      console.log('create Pressed');
      createAccount(
        this.state.name,
        this.state.email,
        this.state.password,
        this.state.gaurdianAccount,
      );
    }
  };

  onPressSignUp = () => {
    this.setState({login: !this.state.login});
    !this.state.login
      ? this.setState({loginText: 'login', signUpText: 'sign up'})
      : this.setState({loginText: 'create', signUpText: 'login'});
  };

  // onPressSignUp() {
  //   this.setState({login: false});
  // }

  render() {
    return (
      <View style={styles.container}>
        {this.state.initializing ? (
          <Splash />
        ) : (
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
                  <LoginForm
                    navigation={this.props.navigation}
                    onType={this.onTypeInput}
                  />
                ) : (
                  <SignUpForm
                    toggleAccount={this.toggleGaurdianAccount}
                    onType={this.onTypeInput}
                  />
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
        )}
      </View>
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
