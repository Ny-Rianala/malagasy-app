import * as React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';

export default function RefactoringList({
  renderItem,
  onPress,
  data = () => null,
}) {
  return (
    <SafeAreaView>
      <View>
        <Text>{data}</Text>
        <TouchableOpacity
          renderItem={renderItem}
          onPress={onPress}></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
