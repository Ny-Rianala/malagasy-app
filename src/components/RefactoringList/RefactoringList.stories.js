import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import categories from '../../data/categories.json';

const DATA = [JSON.stringify(categories)];

const Item = ({item}) => (
  <TouchableOpacity>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

function RefactoringLists() {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={this.keyExtractor}
      />
    </SafeAreaView>
  );
}

storiesOf('RefactoringList', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('category', () => <RefactoringLists />);
