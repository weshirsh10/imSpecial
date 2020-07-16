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
import Icon from 'react-native-vector-icons/FontAwesome';

import {Avatar, Input} from 'react-native-elements';
import ListComponent from './listComponent';
const theme = require('../../theme.json');

export default class Home extends Component {
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
        <View style={styles.header}>
          <Avatar
            rounded
            overlayContainerStyle={{backgroundColor: theme.colors.primary}}
            icon={{
              name: 'user',
              type: 'font-awesome',
              color: theme.colors.secondary,
              size: 25,
            }}
          />
          <Text style={theme.text.headerText}>Chats</Text>
          <Icon name="paper-plane" color={theme.colors.primary} size={25} />
        </View>
        <Input
          placeholder="search"
          inputStyle={styles.search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          placeholderTextColor={theme.colors.primary}
          leftIcon={
            <Icon name="search" size={24} color={theme.colors.primary} />
          }
        />
        <View style={styles.listStyle}>
          <ListComponent navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    alignItems: 'center',
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
    justifyContent: 'space-between',
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
  listStyle: {
    flex: 1,
    width: '100%',
  },
});
