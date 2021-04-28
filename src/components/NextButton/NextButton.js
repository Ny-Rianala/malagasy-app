import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  clickableButton: {
    alignItems: 'center',
    paddingTop: 11,
    paddingLeft: 27,
    paddingBottom: 10,
    paddingRight: 31,
    width: 90,
    height: 40,
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    margin: 15,
  },
  disableButton: {
    alignItems: 'center',
    paddingTop: 11,
    paddingLeft: 27,
    paddingBottom: 10,
    paddingRight: 31,
    width: 90,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgb(6, 182, 212)',
    borderRadius: 30,
    textAlign: 'center',
    margin: 15,
  },
  textClick: {
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  text: {
    color: '#06B6D4',
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
        <Text style={disabled ? styles.text : styles.textClick}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
