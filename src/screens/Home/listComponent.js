import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';
import {StyleSheet, FlatList} from 'react-native';
const list = [
  {
    name: 'Wes Hirsheimer',
    subtitle: 'Hey',
    title: 'WH',
  },
  {
    name: 'Caleb Caldwell',
    subtitle: 'Sup',
    title: 'CC',
  },
  {
    name: 'Ryan Eghrari',
    subtitle: 'Hi',
    title: 'RE',
  },
  {
    name: 'Reagan Hicks',
    subtitle: 'Hello',
    title: 'RH',
  },
  {
    name: 'Chris Hernandez',
    subtitle: 'Wyd',
    title: 'CH',
  },
  {
    name: 'Vincent Schiro',
    subtitle: 'Whats crack a lackin',
    title: 'VS',
  },
  {
    name: 'Kevin Bergstraesser',
    subtitle: 'Hey',
    title: 'KB',
  },
  {
    name: 'Mike Librie',
    subtitle: 'Hey',
    title: 'ML',
  },
  {
    name: 'Mark Lepreine',
    subtitle: 'Hey',
    title: 'ML',
  },
  {
    name: 'Aly Turk',
    subtitle: 'Hey',
    title: 'AT',
  },
  {
    name: 'Amy Neth',
    subtitle: 'Hey',
    title: 'AN',
  },
  {
    name: 'Olivia Gingco',
    subtitle: 'Hey',
    title: 'OG',
  },
  {
    name: 'Cam Rijke',
    subtitle: 'Hey',
    title: 'CR',
  },
];

const theme = require('../../theme.json');

export default class ListComponent extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    console.log('rendering item', item.name);
    console.log('subtitle', item.subtitle);
    return (
      <ListItem
        title={item.name}
        titleStyle={styles.title}
        subtitle={item.subtitle}
        subtitleStyle={styles.subtitle}
        containerStyle={styles.listContainer}
        leftAvatar={{
          title: item.title,
          rounded: true,
          overlayContainerStyle: {backgroundColor: theme.colors.light},
        }}
        bottomDivider
        onPress={() =>
          this.props.navigation.navigate('Chat', {
            name: item.name,
            avatar: item.title,
          })
        }
      />
    );
  };

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
  },
  title: {
    color: theme.colors.dark,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.dark,
  },
});
