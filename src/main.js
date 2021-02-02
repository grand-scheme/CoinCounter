import $ from 'jquery';
// const coincounter
// let quarters;
let dimes;
let nickles;
let pennies;

export const coinCounter = (money, object) => {
    let obj = object || {};

    if (isNaN(money)) {
        return "error";
    }
    if (money === 0){
        return `quarters: ${obj.quarters}, dimes: ${obj.dimes}, nickles: ${obj.nickles}, pennies: ${obj.pennies}`;
    } else if (money / 0.25 >= 1) {
        obj.quarters = Math.floor(money / .25);
	    let newMoney = (money % .25).toFixed(2);
        return coinCounter(money % .25, obj);
    } else if (money / .1 >= 1) {
        obj.dimes = Math.floor(money / .1);
        let newMoney = (money % 0.1).toFixed(2);
        return coinCounter(newMoney, obj);
    } else if (money / .05 >= 1) {
        obj.nickles = Math.floor(money / .05);
        let newMoney = (money % 0.05).toFixed(2);
        return coinCounter(money % .05, obj);
    } else if (money / .01 >= 1) {
        obj.pennies = Math.floor(money / .01);
        let newMoney = (money % 0.01).toFixed(2);
        return coinCounter(newMoney, obj);
    }
}

    // else if  {

    // return `${obj.$} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
// }
// > 4 % .25
// 0
// > 4.05% .25
// 0.04999999999999982
// > 4.25 % .25
// 0
// > 4.30 % .25
// 0.04999999999999982
// >