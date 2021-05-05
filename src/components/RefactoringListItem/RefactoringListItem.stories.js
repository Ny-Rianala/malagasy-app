import * as React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {phrases} from '../../data/phrases.json';
import Pick from '../../assets/icons/pick.svg';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingTop: 17,
    paddingLeft: 16,
    paddingBottom: 17,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#06B6D4',
    marginRight: 10,
  },
  icon: {
    marginTop: 4,
    color: '#06B6D4',
  },
});
const list = phrases.slice(0, 4);
console.log(list);

const ListItem = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => alert('pressed')}>
        <Text>{item.name.en}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Learn</Text>
          <Pick style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{padding: 20}}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

storiesOf('RefactoringListItem', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('listItem', () => <ListItem />);
