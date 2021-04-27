import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ActionButton from './ActionButton';

storiesOf('ActionButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('learn', () => (
    <ActionButton onPress={() => alert('learn')} learnText="learn" />
  ))
  .add('pick', () => (
    <ActionButton onPress={() => alert('pick')} pickText="pick" />
  ))
  .add('correct', () => (
    <ActionButton onPress={() => alert('correct')} correctText="correct" />
  ))
  .add('wrong', () => (
    <ActionButton onPress={() => alert('wrong')} wrongText="wrong" />
  ));
