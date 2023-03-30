import assert from "assert";
import multiplicationPar10 from "./algo.js";

describe('multiplicationPar10', () => {
  it('should return 20 when input is 2', () => {
    assert.equal(multiplicationPar10(2), 20);
  });

  it('should return -30 when input is -3', () => {
    assert.equal(multiplicationPar10(-3), -30);
  });

  it('should return 0 when input is 0', () => {
    assert.equal(multiplicationPar10(0), 0);
  });

  it('should return NaN when input is not a number', () => {
    assert.ok(isNaN(multiplicationPar10('abc')));
  });

  it('should return Infinity when input is Infinity', () => {
    assert.equal(multiplicationPar10(Infinity), Infinity);
  });
});

console.log('\x1b[32m%s\x1b[0m', '✅ Tous les tests ont été validés avec succès ! 🎉');