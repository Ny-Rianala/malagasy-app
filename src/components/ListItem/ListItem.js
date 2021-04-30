import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Pick from '../../assets/icons/pick.svg';

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

export default function ListItem({label, onPress}) {
  return (
    <SafeAreaView style={styles.wrapper} onPress={onPress}>
      <View style={styles.container}>
        <Text>{label}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Pick</Text>
          <Pick style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>
  );
}
