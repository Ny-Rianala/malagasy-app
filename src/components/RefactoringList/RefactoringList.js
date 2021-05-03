// components/Task.js
import * as React from 'react';
import {Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

export default function RefactoringList({renderItem, data = () => null}) {
  return (
    <SafeAreaView>
      <FlatList renderItem={renderItem}>{data}</FlatList>
    </SafeAreaView>
  );
}
