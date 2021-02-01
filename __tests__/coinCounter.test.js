import { coinCounter } from '../src/main.js';
import { TestScheduler } from 'jest';

describe ('CoinCounter', () => {
    const input = "string";

    test('should return an error if input is not a number', () => {
    expect(coinCounter(input)).toEqual("error")
    });

    test('should not return error if input is a number', () => {
      expect(coinCounter(9)).not.toEqual("error")
    });

    // test('if the input minus quarters has remainder, return statement', () => {
    //   expect(coinCounter(4.01)).toEqual("25 cents")
    // });
    
    test('it should return coinArray with property quarters equal to input divided by .25', () => {
    expect(coinCounter(4.00, 0)).toEqual(16);
    });
});


// function isThisANumber(input) {
//   if (input != NaN) {
//     return true;
//   } else {
//     return false;
//   }
// };
