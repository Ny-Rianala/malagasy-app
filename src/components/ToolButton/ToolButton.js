import * as React from 'react';
import {TouchableOpacity} from 'react-native';

export default function ToolButton({onPress, children}) {
  return (
    // I like using children for the svg, but the way you do it here means that all the styles, logic, and svg is handled by the parent component, so the component basically does nothing. Additionally, you nest a touchableOpacity inside a touchableOpacity, which is an unnecessary duplication. It would be better to pass only the svg as a child.
    <TouchableOpacity onPress={onPress} style={{margin: 20}}>
      {children}
    </TouchableOpacity>
  );
}
