import * as api from './models/APIController';
import { elements } from './views/base';
import * as addView from './views/AddView';
import * as topView from './views/TopView';
import * as filterView from './views/FilterView';
import * as transactionListView from './views/TransactionListView';


/************ get Balance + Totals(income& expense) ************/
let totalExp, totalInc, balance;
const getBalance = async () => {
    balance = await api.getBalance(null, null, null, null);
    balance = balance.data;

    totalInc = await api.getBalance(15, null, null, null);
    totalInc = totalInc.data;

    totalExp = await api.getBalance(16, null, null, null);
    totalExp = totalExp.data;

}

/***** get categories based on type ******* */
let typeCategories;
const getcategories = async (type) => {
    typeCategories = await api.getCategories(type);
    typeCategories = typeCategories.data;
}

/*****  get All categories ******* */
let allCategories;
const getAllCategories = async () => {
    allCategories = await api.getCategories(0);
    allCategories = allCategories.data;
}

// get filtered incomes & expenses
let filteredIncomes, filteredExpenses;
const getFilteredTransactions = async (filter) => {

    filteredIncomes = await api.getTransactions(15, filter.categoryId, filter.to, filter.from);
    for (let el in filteredIncomes.data) {
        let category = await api.getCategory(filteredIncomes.data[el].icategory);
        filteredIncomes.data[el].icategory = category.data.value;
    }
    filteredIncomes = filteredIncomes.data;

    filteredExpenses = await api.getTransactions(16, filter.categoryId, filter.to, filter.from);
    for (let el in filteredExpenses.data) {
        let category = await api.getCategory(filteredExpenses.data[el].icategory);
        filteredExpenses.data[el].icategory = category.data.value;
    }
    filteredExpenses = filteredExpenses.data;
}

// get all incomes & expenses
let incomes, expenses;
const getTransactions = async () => {

    incomes = await api.getTransactions(15, null, null, null);
    for (let el in incomes.data) {
        let category = await api.getCategory(incomes.data[el].icategory);
        incomes.data[el].icategory = category.data.value;
    }
    incomes = incomes.data;


    expenses = await api.getTransactions(16, null, null, null);
    for (let el in expenses.data) {
        let category = await api.getCategory(expenses.data[el].icategory);
        expenses.data[el].icategory = category.data.value;
    }
    expenses = expenses.data;

}

//get category(id)
const getCategory = async (id) => {
    return await api.getCategory(id);
}

/************ filtered totals ************/
let filteredIncTotal, filteredExpTotal;
const getFilteredTotals = async (categoryId, to, from) => {

    filteredIncTotal = await api.getBalance(15, categoryId, to, from);
    filteredExpTotal = await api.getBalance(16, categoryId, to, from);
    filteredIncTotal = filteredIncTotal.data;
    filteredExpTotal = filteredExpTotal.data;

}


/********************************************* */


const changeCategorytype = async () => {
    //1.clear category  and select placeholder 'defualt value' 
    addView.clearCategoryList();

    //2.get type value
    var type = elements.addType.options[elements.addType.selectedIndex].value;

    //3.get categories based on transaction type  
    if (type == 'inc')
        await getcategories(1);
    else if (type == 'exp')
        await getcategories(2);

    //4.render categories on UI
    addView.renderCategories(typeCategories);
}

const addTransaction = async () => {
     //1. get input data
     const transaction = addView.readAddSpace();

     //2. add transcation
     if (transaction.type == 'inc')
         await api.addIncome(15, transaction.amount, transaction.category, transaction.date, transaction.comment);
     else if (transaction.type == 'exp')
         await api.addExpense(16, transaction.amount, transaction.category, transaction.date, transaction.comment);
 
 
     //3. clear list of transactions
     transactionListView.clearTransactionList(1);
     transactionListView.clearTransactionList(2);
 
     //4. get all transactions 
     await getTransactions();
 
     //5. show all transactions 
     transactionListView.renderIncomeList(incomes);
     transactionListView.renderExpenseList(expenses);
 
     //6. clear input data
     addView.clearAddSpace();
 
     /**update balances**/
     //1. get balance for  (total / inc / exp )
     await getBalance();
 
     //2. show balance for  (total / inc / exp ) on UI
     topView.renderBalances(balance, totalInc, totalExp);
 
     //3. update totals in transactions list 
     elements.filteredIncTotal.innerHTML = totalInc;
     elements.filteredExpTotal.innerHTML = Math.abs(totalExp);
}

const transactionsFiltering = async () => {

    //read filtering
    var filter = filterView.readFilterSpace();

    if (filter.type == null) { // فلترة لل الجهتين 
        //clear list of all transactions
        transactionListView.clearTransactionList(1);
        transactionListView.clearTransactionList(2);

        // get balance + totals based on filtering
        await getFilteredTotals(filter.categoryId, filter.to, filter.from);

        //render filtered totals
        elements.filteredIncTotal.innerHTML = filteredIncTotal;
        elements.filteredExpTotal.innerHTML = Math.abs(filteredIncTotal);
    }
    else { //  فلترة للنوع اللي تابعة اله الكاتيجوري المختارة

        // clear list of transactions based on filter type
        transactionListView.clearTransactionList(filter.type);

        // get list of transactions based on filter type
        if (filter.type == 1) {
            await getFilteredTotals(filter.categoryId, filter.to, filter.from);
            elements.filteredIncTotal.innerHTML = filteredIncTotal;
        }
        else if (filter.type == 2) {
            await getFilteredTotals(filter.categoryId, filter.to, filter.from);
            elements.filteredExpTotal.innerHTML = Math.abs(filteredExpTotal);
        }


    }

    // get transactions based on  th filter
    await getFilteredTransactions(filter);

    // render filtered transactions
    transactionListView.renderIncomeList(filteredIncomes);
    transactionListView.renderExpenseList(filteredExpenses);


}

const showAllTransactions = async () => {
    //clear list of transactions 
    transactionListView.clearTransactionList(1);
    transactionListView.clearTransactionList(2);

    // clear filtering 
    filterView.clearFilterSpace();

    //  get all transactions 
    await getTransactions();

    //  show all transactions 

    transactionListView.renderIncomeList(incomes);
    transactionListView.renderExpenseList(expenses);


    //totals 
    elements.filteredIncTotal.innerHTML = totalInc;
    elements.filteredExpTotal.innerHTML = Math.abs(totalExp);
}

const pageFirstView = async() => {
      //1.get balance for  (totalBalance / total income /total expense)
      await getBalance();

      //2. show top balances  + filtered totals on UI
      topView.renderBalances(balance, totalInc, totalExp);
      elements.filteredIncTotal.innerHTML = totalInc;
      elements.filteredExpTotal.innerHTML = Math.abs(totalExp);
  
      //3.get category list for add space  
      var type = elements.addType.options[elements.addType.selectedIndex].value;
      if (type == 'inc')
          await getcategories(1);
      else if (type == 'exp') 
      await getcategories(2);
  
      //4. show category list for add space  
      addView.renderCategories(typeCategories);
  
      //get all categories for filtering
      await getAllCategories();
  
      //  render category list in filter space 
      filterView.renderCategories(allCategories);
  
      // firstly get all transactions 
      await getTransactions();
  
      //  show all transactions 
      transactionListView.renderIncomeList(incomes);
      transactionListView.renderExpenseList(expenses);
}
/******************************************** */



window.addEventListener('load', async () => {
   
    await pageFirstView();

    /******* when selector type changed ****/
    elements.addType.addEventListener('change', changeCategorytype);

    /******* fliter change ****/
    elements.filterCategory.addEventListener('change', transactionsFiltering);
    elements.filterFrom.addEventListener('blur', transactionsFiltering);// blur event is fired when the input field looses focus
    elements.filterTo.addEventListener('blur', transactionsFiltering);


    /**** show all button event listener ***/
    elements.showAll.addEventListener('click', showAllTransactions);
    
    /*** add transactions ****/
    elements.addBtn.addEventListener('click', addTransaction );

});