import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

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
    // borderWidth is duplicate
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
});

export default function RefactoringActionButton({onPress, children}) {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={onPress}>
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
