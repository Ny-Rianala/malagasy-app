import * as React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingTop: 17,
    paddingLeft: 16,
    paddingBottom: 17,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});

storiesOf('ListItem', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('listItem', () => (
    <View style={{padding: 20}}>
      <TouchableHighlight style={styles.button} onPress={() => alert('number')}>
        <ListItem label="zero"></ListItem>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => alert('number')}>
        <ListItem label="two-thousand"></ListItem>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => alert('number')}>
        <ListItem label="nine"></ListItem>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => alert('number')}>
        <ListItem label="1494"></ListItem>
      </TouchableHighlight>
    </View>
  ));
