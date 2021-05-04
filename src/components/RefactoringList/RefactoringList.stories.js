import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {categories} from '../../data/categories.json';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingTop: 17,
    paddingLeft: 16,
    paddingBottom: 17,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});

const DATA = categories;

const RefactoringLists = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => alert('pressed')}>
        <Text>{item.name.en}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{padding: 20}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

storiesOf('RefactoringList', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('category', () => <RefactoringLists />);
