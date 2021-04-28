import * as React from 'react';
import {TouchableOpacity} from 'react-native';

export default function ToolButton({onPress, children}) {
  return (
    <TouchableOpacity onPress={onPress} style={{margin: 20}}>
      {children}
    </TouchableOpacity>
  );
}
