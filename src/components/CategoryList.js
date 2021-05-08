import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {RefactoringLists} from '../components/RefactoringList/RefactoringList.stories';

export const CategoryList = () => {
  return (
    <View>
      <Text>Select a category: </Text>
      <View>
        <TouchableOpacity>
          <RefactoringLists onPress={() => alert('pressed')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
