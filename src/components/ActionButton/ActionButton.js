import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Correct from '../../assets/icons/correct.svg';
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#06B6D4',
    fontSize: 23,
    borderWidth: 1,
    width: '50%',
    height: '50%',
    margin: 20,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 0,
  },
  image: {
    marginTop: 30,
    marginLeft: 0,
  },
});

export default function ActionButton({title, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.subcontainer}>
        <Text style={styles.text}>{title}</Text>
        {/* <FontAwesome name={"chevron-up"} color="red" fontSize= {48}/> */}
        <Correct />
      </TouchableOpacity>
    </View>
  );
}
