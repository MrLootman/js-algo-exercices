import assert from 'assert';
import multiplyByThree from './algo.js';

describe('multiplyByThree', function() {
  it('should return [3, 6, 9, 12, 15] when given [1, 2, 3, 4, 5]', function() {
    const numbers = [1, 2, 3, 4, 5];
    const expected = [3, 6, 9, 12, 15];
    const actual = multiplyByThree(numbers);
    assert.deepEqual(actual, expected);
  });

  it('should return "Nope !" when given []', function() {
    const numbers = [];
    const expected = 'Nope !';
    const actual = multiplyByThree(numbers);
    assert.deepEqual(actual, expected);
  });

  it('should return "Nope !" when given null', function() {
    const numbers = null;
    const expected = 'Nope !';
    const actual = multiplyByThree(numbers);
    assert.deepEqual(actual, expected);
  });

  it('should return [-3, 0, 3] when given [-1, 0, 1]', function() {
    const numbers = [-1, 0, 1];
    const expected = [-3, 0, 3];
    const actual = multiplyByThree(numbers);
    assert.deepEqual(actual, expected);
  });

  console.log('\x1b[32m%s\x1b[0m', '✅ Tous les tests ont été validés avec succès ! 🎉');
});