import { elements } from './base';
import * as api from '../models/APIController'

export const renderIncomeList = (income) => {

    for (let el in income) {
        var markup = `
       <div class="item clearfix" id="${income[el].id}">
       <img class="category_icon" src="img/${income[el].icategory}.png" onerror="this.src='./img/error.png'"></img>
          <div class="item__category">${income[el].icategory}</div>
          <div class="item__description">${income[el].comment}</div>
          <div class="item__date">${income[el].date}</div>
          <div class="right clearfix">
              <div class="item__value">${income[el].amount} JD</div>
          </div>
      `;
        elements.incList.insertAdjacentHTML('beforeend', markup);
    }
}


export const renderExpenseList = (expenses) => {

    for (let el in expenses) {
        var markup = `
      <div class="item clearfix" id="${expenses[el].id}">
      
         <img class="category_icon" src="img/${expenses[el].icategory}.png" onerror="this.src='./img/error.png'"></img>
         <div class="item__category">${expenses[el].icategory}</div>
         <div class="item__description">${expenses[el].comment}</div>
         <div class="item__date">${expenses[el].date}</div>
         <div class="right clearfix">
             <div class="item__value">${Math.abs(expenses[el].amount)} JD</div>
         </div>
     `;
        elements.expList.insertAdjacentHTML('beforeend', markup);

    }
}

export const clearTransactionList = (type) => {

    if (type == 1)//clear income list
        elements.incList.innerHTML = "";
    else if (type == 2)//clear expense list
        elements.expList.innerHTML = "";
}

