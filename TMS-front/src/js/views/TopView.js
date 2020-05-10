import { elements } from './base';


export const renderBalances =  ( balance , totalInc , totalExp) => {

    balance = formatNumber (balance);
    totalInc = formatNumber (totalInc); 
    totalExp = formatNumber (totalExp); 
    
    elements.balance.textContent = balance ;
    elements.totalExpense .textContent = totalExp ;
    elements.totalIncome.textContent = totalInc ;
   
};

var formatNumber = num => {
    var numSplit, int, dec ,newNum;
    
    newNum = Math.abs(num);
    newNum = newNum.toFixed(2);

    numSplit = newNum.split('.');

    int = numSplit[0];
    if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }

    dec = numSplit[1];

    return (num <0 ? '-' : '+') + ' ' + int + '.' + dec;

};

