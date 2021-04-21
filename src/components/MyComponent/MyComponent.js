// components/Task.js
import * as React from 'react';
import { SafeAreaView, Button } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({greeting}) {

  console.log(greeting);
  return (
    <SafeAreaView >
      <View>{greeting}</View>
    </SafeAreaView>
  );
}