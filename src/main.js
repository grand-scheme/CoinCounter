import $ from 'jquery';
// const coincounter


export const coinCounter = (money) => {
    if (isNaN(money)) {
        return "error";
    }
    else {
        return "something else";
    }
}