import * as React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';

export default function RefactoringList({
  renderItem,
  onPress,
  data = () => null,
}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>{data}</Text>
        <TouchableOpacity
          renderItem={renderItem}
          onPress={onPress}></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
