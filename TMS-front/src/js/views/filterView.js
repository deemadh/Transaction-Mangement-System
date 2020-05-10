import { elements } from './base';


export const renderCategories = categories => {

  for (var el in categories) {
    const markup = `<option value="${categories[el].id}" type="${categories[el].dkey}">${categories[el].value}</option>`;
    elements.filterCategory.insertAdjacentHTML('beforeend', markup);
  }
}


export const readFilterSpace = () => {

  const filter = {
    to: elements.filterTo.value,
    from: elements.filterFrom.value,
    categoryId: elements.filterCategory.value,
    type: elements.filterCategory.options[elements.filterCategory.selectedIndex].getAttribute("type")
  }
  return filter;
}


export const clearFilterSpace = () => {
  elements.filterTo.value = "";
  elements.filterFrom.value = "";
  const category = elements.filterCategory;
  category[0].selected = true;

}