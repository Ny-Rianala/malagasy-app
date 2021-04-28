import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ToolButton from './ToolButton.js';

storiesOf('Tool button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('add', () => <ToolButton />)
  .add('seen', () => <ToolButton />)
  // .add('learnt', () => <ToolButton />)
  .add('back', () => <ToolButton />)
  .add('mode', () => <ToolButton />);
