import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    padding: 20,
  },
  label: {
    fontSize: 16,
  },
});
export default function SectionHeading({children, onPress, label}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.subContainer}>
        <Text style={styles.label}>{label}</Text>
        <View>
          <Text>{children}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
