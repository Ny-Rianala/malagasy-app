import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ArrowRight from '../../assets/icons/arrow-right.svg';
import Pick from '../../assets/icons/pick.svg';
import Correct from '../../assets/icons/correct.svg';
import Wrong from '../../assets/icons/wrong.svg';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  subcontainer: {
    color: '#06B6D4',
    fontSize: 23,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  button: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 90,
    marginRight: 270,
    paddingTop: 17,
    paddingLeft: 16,
    paddingBottom: 17,
    paddingRight: 20,
  },
  correct: {
    color: '#06D440',
  },
  wrong: {
    color: '#D4068E',
  },
  text: {
    color: '#06B6D4',
  },
  icon: {
    marginTop: 2,
  },
});

export default function ActionButton({
  onPress,
  title,
  learnText,
  pickText,
  correctText,
  wrongText,
}) {
  //The action button component only creates one button at a time, not all four.
  // I added a file in this folder containing a picture of how the components look for me. If there is a rendering error on my part, please let me know :)
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>{learnText}</Text>
          <ArrowRight style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>{pickText}</Text>
          <Pick />
        </TouchableOpacity>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.correct}>{correctText}</Text>
          <Correct />
        </TouchableOpacity>
      </View>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.wrong}>{wrongText}</Text>
          <Wrong />
        </TouchableOpacity>
      </View>
    </View>
  );
}
