import { coinCounter } from '../src/main.js';
import { TestScheduler } from 'jest';

describe ('CoinCounter', () => {
    const input = "string";

    test('should return an error if input is not a number', () => {
    expect(coinCounter(input)).toEqual("error")
    });
});


// function isThisANumber(input) {
//   if (input != NaN) {
//     return true;
//   } else {
//     return false;
//   }
// };


// import Player from "./../src/player.js";