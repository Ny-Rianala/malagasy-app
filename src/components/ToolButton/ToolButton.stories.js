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

export const AddButton = () => {
  return (
    <TouchableOpacity style={styles.Button} onPress={() => alert('add')}>
      <Add />
    </TouchableOpacity>
  );
};

export const SeenButton = () => {
  return (
    <TouchableOpacity style={styles.Button} onPress={() => alert('seen')}>
      <Seen />
    </TouchableOpacity>
  );
};

export const LearntButton = () => {
  return (
    <TouchableOpacity
      style={styles.LearntButton}
      onPress={() => alert('learnt')}>
      <Learnt />
    </TouchableOpacity>
  );
};

export const BackButton = () => {
  return (
    <TouchableOpacity style={styles.BackButton} onPress={() => alert('back')}>
      <Back />
    </TouchableOpacity>
  );
};

export const NightmodeButton = () => {
  return (
    <TouchableOpacity
      style={styles.ModeButton}
      onPress={() => alert('nightmode')}>
      <NightMode />
    </TouchableOpacity>
  );
};

storiesOf('Tool button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('add', () => (
    <ToolButton>
      <AddButton />
    </ToolButton>
  ))
  .add('seen', () => (
    <ToolButton>
      <SeenButton />
    </ToolButton>
  ))
  .add('learnt', () => (
    <ToolButton>
      <LearntButton />
    </ToolButton>
  ))
  .add('back', () => (
    <ToolButton>
      <BackButton />
    </ToolButton>
  ))
  .add('nitghtmode', () => (
    <ToolButton>
      <NightMode />
    </ToolButton>
  ));
