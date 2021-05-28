import categories from '../data/categories.json';
console.log(categories); // Please remove all console logs from production code

export function citiesList() {
  return {
    type: 'CATEGORIES_LIST',
    payload: categories,
  };
}
