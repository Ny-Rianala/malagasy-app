import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import Add from '../../assets/icons/add.svg';
import Seen from '../../assets/icons/seen.svg';
import Learnt from '../../assets/icons/learnt.svg';
import Back from '../../assets/icons/back.svg';
import NightMode from '../../assets/icons/night-mode.svg';
import ToolButton from './ToolButton.js';

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 12,
    marginTop: 20,
  },
  LearntButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    paddingTop: 13,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 13,
    marginTop: 20,
  },
  BackButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 15,
    marginTop: 20,
  },
  ModeButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 9,
    marginTop: 20,
  },
});

storiesOf('Tool button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('add', () => (
    <ToolButton>
      <TouchableOpacity style={styles.Button} onPress={() => alert('add')}>
        <Add />
      </TouchableOpacity>
    </ToolButton>
  ))
  .add('seen', () => (
    <ToolButton>
      <TouchableOpacity style={styles.Button} onPress={() => alert('seen')}>
        <Seen />
      </TouchableOpacity>
    </ToolButton>
  ))
  .add('learnt', () => (
    <ToolButton>
      <TouchableOpacity
        style={styles.LearntButton}
        onPress={() => alert('learnt')}>
        <Learnt />
      </TouchableOpacity>
    </ToolButton>
  ))
  .add('back', () => (
    <ToolButton>
      <TouchableOpacity style={styles.BackButton} onPress={() => alert('back')}>
        <Back />
      </TouchableOpacity>
    </ToolButton>
  ))
  .add('nitghtmode', () => (
    <ToolButton>
      <TouchableOpacity
        style={styles.ModeButton}
        onPress={() => alert('nightmode')}>
        <NightMode />
      </TouchableOpacity>
    </ToolButton>
  ));
