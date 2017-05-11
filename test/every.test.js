const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });


    it('returns false if all numbers in an array are odd yet the list also contains values of another type (i.e. string)', () => {
      const nums = [1, 3, 5, 'john', 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

  });
});