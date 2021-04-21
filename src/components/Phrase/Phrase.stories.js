
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './Phrase';


storiesOf('Phrase', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('greeting', () => <MyComponent greeting= "Hello" />);
