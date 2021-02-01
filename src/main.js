import $ from 'jquery';
// const coincounter
// let quarters;
let dimes;
let nickles;
let pennies;

let obj = {};
export const coinCounter = (money) => {
    if (isNaN(money)) {
        return "error";
    }
    if (money / .25 > 0) {
        obj.quarters = Math.floor(money / .25);
        // money = money % .25;
        return coinCounter(money % .25);
    } else 
    {
        return obj.quarters;
    }
}
    // else if  {

    // return `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
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