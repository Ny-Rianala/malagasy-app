import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function LanguageSwitcherButton({children}) {
  // See comments for tool button.
  // Having a controlled component is a valid goal but should not go as far as having completely useless components. At least basic styling should be handled in this file
  return (
    <SafeAreaView>
      <TouchableOpacity>{children}</TouchableOpacity>
    </SafeAreaView>
  );
}
