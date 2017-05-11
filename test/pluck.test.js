const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of ages based on the last element in each age list', () => {
    const people = [
      { name: 'Harriet', age: (12,14)},
      { name: 'Lazarus', age: (999,51)},
      { name: 'Bethany', age: (14)}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([14, 51, 14]);
  });

});