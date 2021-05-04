import categories from '../data/categories.json';
console.log(categories);

export function citiesList() {
  return {
    type: 'CATEGORIES_LIST',
    payload: categories,
  };
}
