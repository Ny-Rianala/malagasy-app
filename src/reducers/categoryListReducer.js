export default function categoryList(categoryList = [], action) {
  switch (action.type) {
    case 'CATEGORIES_LIST':
      return [...categories, action.payload];
    default:
      return categories;
  }
}
