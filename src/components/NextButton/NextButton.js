// components/Task.js
import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  clicableButton: {
    alignItems: 'center',
    paddingTop: 11,
    paddingLeft: 27,
    paddingBottom: 10,
    paddingRight: 31,
    width: 90,
    height: 40,
    backgroundColor: '#06B6D4',
    borderRadius: 30,
  },
  disableButton: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default function NextButton({text, onPress, disabled}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={disabled ? styles.disableButton : styles.clickableButton}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
