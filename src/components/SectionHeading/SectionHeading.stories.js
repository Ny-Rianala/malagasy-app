import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {text} from '@storybook/addon-knobs';

import {storiesOf} from '@storybook/react-native';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import Pick from '../../assets/icons/pick.svg';

import SectionHeading from './SectionHeading';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#06B6D4',
    marginRight: 10,
    fontSize: 16,
  },
  icon: {
    marginTop: 4,
  },
});

storiesOf('SectiongHeading', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Learn', () => (
    <SectionHeading label={'All'} onPress={() => alert('learn')}>
      <TouchableOpacity style={styles.wrapper}>
        <Text style={styles.text}>{text('Learn', 'Learn')}</Text>
        <ArrowRight style={styles.icon} />
      </TouchableOpacity>
    </SectionHeading>
  ))
  .add('Pick', () => (
    <SectionHeading label={'All'} onPress={() => alert('pick')}>
      <TouchableOpacity style={styles.wrapper}>
        <Text style={styles.text}>{text('Pick', 'pick')}</Text>
        <Pick style={styles.icon} />
      </TouchableOpacity>
    </SectionHeading>
  ));
