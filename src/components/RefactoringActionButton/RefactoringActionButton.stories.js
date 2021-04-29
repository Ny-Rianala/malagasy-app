import * as React from 'react';
import {text} from '@storybook/addon-knobs';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import RefactoringActionButton from './RefactoringActionButton';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import Pick from '../../assets/icons/pick.svg';
import Correct from '../../assets/icons/correct.svg';
import Wrong from '../../assets/icons/wrong.svg';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  subcontainer: {
    color: '#06B6D4',
    fontSize: 23,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  button: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 90,
    marginRight: 270,
    paddingTop: 17,
    paddingLeft: 16,
    paddingBottom: 17,
    paddingRight: 20,
  },
  correct: {
    color: '#06D440',
    fontSize: 16,
  },
  wrong: {
    color: '#D4068E',
    fontSize: 16,
  },
  text: {
    color: '#06B6D4',
    fontSize: 16,
  },
  icon: {
    marginTop: 4,
    marginLeft: 10,
  },
});

storiesOf('RefactoringActionButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('learn', () => (
    <RefactoringActionButton>
      <TouchableOpacity onPress={() => alert('learn')} style={styles.button}>
        <Text style={styles.text}>{text('Learn', 'Learn')}</Text>
        <ArrowRight style={styles.icon} />
      </TouchableOpacity>
    </RefactoringActionButton>
  ))
  .add('pick', () => (
    <RefactoringActionButton>
      <TouchableOpacity onPress={() => alert('pick')} style={styles.button}>
        <Text style={styles.text}>{text('Pick', 'Pick')}</Text>
        <Pick style={styles.icon} />
      </TouchableOpacity>
    </RefactoringActionButton>
  ))
  .add('correct', () => (
    <RefactoringActionButton>
      <TouchableOpacity onPress={() => alert('correct')} style={styles.button}>
        <Text style={styles.correct}>{text('Correct', 'Correct')}</Text>
        <Correct style={styles.icon} />
      </TouchableOpacity>
    </RefactoringActionButton>
  ))
  .add('wrong', () => (
    <RefactoringActionButton>
      <TouchableOpacity onPress={() => alert('wrong')} style={styles.button}>
        <Text style={styles.wrong}>{text('Wrong', 'Wrong')}</Text>
        <Wrong style={styles.icon} />
      </TouchableOpacity>
    </RefactoringActionButton>
  ));
