import * as React from 'react';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import List from './List';

export const Separator = () => <View style={styles.separator} />;

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

storiesOf('List', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('list', () => (
    <SafeAreaView style={{padding: 20}}>
      <TouchableOpacity style={styles.button} onPress={() => alert('all')}>
        <List label="All"></List>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('food')}>
        <List label="Food"></List>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('greetings')}>
        <List label="Greetings"></List>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('restaurant')}>
        <List label="At the restaurant"></List>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('unnecessary long')}>
        <List label="An unnecessary long"></List>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('single words')}>
        <List label="Single Words"></List>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('at the market')}>
        <List label="At the market"></List>
      </TouchableOpacity>
    </SafeAreaView>
  ));
