import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';

function Button() {
  return (
    <NextButton onPress={() => alert('pressed')} text="add" disabled={false} />
  );
}

storiesOf('Next button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('next clickable', () => <Button />)
  .add('disable', () => <NextButton text="add" disabled={true} />);
