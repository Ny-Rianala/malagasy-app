import * as React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import Learn from '../../assets/icons/learnt.svg';

const styles = StyleSheet.create({
  container: {
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
  },
});

export default function RefactoringList({
  renderItem,
  onPress,
  data = () => null,
}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>{data}</Text>
        <View
          style={styles.subContainer}
          renderItem={renderItem}
          onPress={onPress}>
          <Text style={styles.text}>Learn</Text>
          <Learn style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>
  );
}
