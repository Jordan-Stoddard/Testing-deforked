const {each,
  map,
  reduce,
  find,
  filter,
  flatten,} = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map function test suite', () => {
    it('should be a function', () => {
      const map1 = map;
      expect(typeof map1).toBe('function');
    });
    // it('should be a function', () => {
    //   expect(map(['jordan', 'stoddard'], each(['one', 'two'], 'two'))).toBe('function');
    // });
  });



});
