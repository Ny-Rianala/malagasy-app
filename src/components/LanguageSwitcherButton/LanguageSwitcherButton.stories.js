import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import Switch from '../../assets/icons/switch.svg';

import LanguageSwitcherButton from './LanguageSwitcherButton';

const styles = StyleSheet.create({
  switchButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#06B6D4',
    borderRadius: 25,
    width: 90,
    height: 40,
    paddingTop: 11,
    paddingLeft: 9,
    paddingBottom: 11,
    paddingRight: 9,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});

export const LanguageSwitcher = () => {
  return (
    <TouchableOpacity
      onPress={() => alert('switch')}
      style={styles.switchButton}>
      <Text style={styles.text}>en</Text>
      <Switch />
      <Text style={styles.text}>ma</Text>
    </TouchableOpacity>
  );
};

storiesOf('LanguageSwitcherButton', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('Language switcher', () => (
    <LanguageSwitcherButton>
      <LanguageSwitcher />
    </LanguageSwitcherButton>
  ));
