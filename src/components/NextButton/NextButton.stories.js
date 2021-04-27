import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';

function Button() {
  return (
    <NextButton onPress={() => console.log('I am clicked')} disabled={false} />
  );
}

storiesOf('Next button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('next clickable', () => <Button text="add" />)
  .add('disable', () => <NextButton text="Add" disabled={true} />);
