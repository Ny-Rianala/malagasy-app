import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
// import categories from '../../data/categories.json';

export default function categoriesList() {
  // React components should be KebabCase => CategoriesList()
  const listOfCategories = useSelector(state => state.categories);
  console.log(listOfCategories);

  function showCategoriesList() {
    const categoryList = listOfCategories.map(category => (
      <View key={category.id}>
        <TouchableOpacity>{category.name}</TouchableOpacity>
      </View>
    ));
    return categoryList;
  }
  return <Text>{showCategoriesList}</Text>;
}
