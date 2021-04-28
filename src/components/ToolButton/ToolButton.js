import * as React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Add from '../../assets/icons/add.svg';
import Back from '../../assets/icons/back.svg';
import NightMode from '../../assets/icons/night-mode';
import Seen from '../../assets/icons/seen.svg';
import Learnt from '../../assets/icons/learnt.svg';

const styles = StyleSheet.create({
  Buttons: {
    display: 'flex',
    flexDirection: 'column',
    margin: 12,
  },
  Button: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 13,
    marginTop: 20,
  },
  LearntButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    paddingTop: 13,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 13,
    marginTop: 20,
  },
  BackButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 15,
    marginTop: 20,
  },
  ModeButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 9,
    marginTop: 20,
  },
});

export default function ToolButton({children, onPress}) {
  return (
    <SafeAreaView style={styles.Buttons}>
      <TouchableOpacity onPress={() => alert('add')} style={styles.Button}>
        {children}
        <Add style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('seen')} style={styles.Button}>
        {children}
        <Seen style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('learnt')}
        style={styles.LearntButton}>
        {children}
        <Learnt style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('back')} style={styles.BackButton}>
        {children}
        <Text style={styles.icon}>
          <Back />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('nightmode')}
        style={styles.ModeButton}>
        {children}
        <NightMode style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
