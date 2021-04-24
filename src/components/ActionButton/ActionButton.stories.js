
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ActionButton from './ActionButton';



storiesOf('ActionButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('learn', () => <ActionButton onPress={() => alert('learn')} title="learn"/>)
  .add('pick', () => <ActionButton onPress={() => alert('pick')} title="pick"/>)
  .add('correct', () => <ActionButton onPress={() => alert('correct')}  title="correct"/>)
  .add('wrong', () => <ActionButton onPress={() => alert('wrong')} title="wrong"/>);