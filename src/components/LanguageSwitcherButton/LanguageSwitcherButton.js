import * as React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';

export default function LanguageSwitcherButton({children}) {
  return (
    <SafeAreaView>
      <TouchableOpacity>{children}</TouchableOpacity>
    </SafeAreaView>
  );
}
