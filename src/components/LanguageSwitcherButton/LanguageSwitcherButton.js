import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function LanguageSwitcherButton({children}) {
  return (
    <SafeAreaView>
      <TouchableOpacity>{children}</TouchableOpacity>
    </SafeAreaView>
  );
}
