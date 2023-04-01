import assert from "assert";
import isMajor from './algo.js';

describe('isMajor', function() {
  it('should return "J\'ai plus de dix-huit ans" when age is greater than 18', function() {
    assert.strictEqual(isMajor(19), 'J\'ai plus de 18 ans');
    assert.strictEqual(isMajor(25), 'J\'ai plus de 18 ans');
  });

  it('should return "J\'ai moins de dix-huit ans" when age is less than or equal to 18', function() {
    assert.strictEqual(isMajor(18), 'J\'ai moins de 18 ans');
    assert.strictEqual(isMajor(10), 'J\'ai moins de 18 ans');
    assert.strictEqual(isMajor(0), 'J\'ai moins de 18 ans');
  });
});

