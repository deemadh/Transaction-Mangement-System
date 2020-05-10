import { elements } from './base';



export const renderCategories = categories => {

    // console.log(value);
    for (var el in categories) {
        const markup = `<option value="${categories[el].id}" type="${categories[el].dkey}">${categories[el].value}</option>`;
        elements.addCategory.insertAdjacentHTML('beforeend', markup);
    }
}


export const readAddSpace = () => {
    const transaction = {
        type: elements.addType.options[elements.addType.selectedIndex].value,
        amount: elements.addAmount.value,
        date: elements.addDate.value,
        comment: elements.addComment.value,
        category: elements.addCategory.options[elements.addCategory.selectedIndex].value
    }

    return transaction;
}


export const clearAddSpace = () => {
    elements.addAmount.value = "";
    elements.addDate.value = "";
    elements.addComment.value = "";
    const category = elements.addCategory;
    category[0].selected = true;
    const type = elements.addType;
    type[0].selected = true;

}


export const clearCategoryList = () => {
    elements.addCategory.innerHTML = "";
    var init = `<option value="" disabled selected>Category</option>`;
    elements.addCategory.insertAdjacentHTML('beforeend', init);
}