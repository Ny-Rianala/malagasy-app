import * as React from 'react';
import { SafeAreaView, Button,Image, Platform} from 'react-native';

export default function ActionButton({title, onPress}) {

    return (
    <SafeAreaView >
        <Button
            onPress={onPress}
            title = {title}
            type = "clear"
            />
    </SafeAreaView>
  );
}