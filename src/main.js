import $ from 'jquery';
// const coincounter


export const coinCounter = (money) => {
    let coinArray = {};
    
    if (isNaN(money)) {
        return "error";
    }
    if (money % .25 > 0) {
        coinArray.quarters = Math.floor(money / .25);
        money -= .25 * coinArray.quarters;
        return coinCounter(money);
        // money -= 'something';
        // // return coinCounter(money);
    } else if (money === 0)
    {
        return coinArray;
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