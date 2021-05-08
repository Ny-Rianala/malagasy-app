import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {RefactoringLists} from '../RefactoringList/RefactoringList.stories';
import {LanguageSwitcher} from '../LanguageSwitcherButton/LanguageSwitcherButton.stories';
import {
  AddButton,
  LearntButton,
  SeenButton,
  NightmodeButton,
} from '../ToolButton/ToolButton.stories';

const styles = StyleSheet.create({
  ButtonHeadings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 170,
    marginLeft: 23,
    paddingTop: 35,
    paddingLeft: 3,
  },
  Text: {
    fontSize: 18,
    marginLeft: 23,
    paddingEnd: 15,
    paddingTop: 56,
  },
  LanguageSwitcher: {
    paddingTop: 20,
  },
});

export const CategoryList = () => {
  return (
    <SafeAreaView>
      <View style={styles.ButtonHeadings}>
        <AddButton />
        <View style={styles.LanguageSwitcher}>
          <LanguageSwitcher />
        </View>
        <SeenButton />
        <LearntButton />
        <NightmodeButton />
      </View>
      <View>
        <Text style={styles.Text}>Select a category: </Text>
        <TouchableOpacity>
          <RefactoringLists onPress={() => alert('pressed')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
