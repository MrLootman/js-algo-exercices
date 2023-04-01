import assert from "assert";
import somme from "./algo.js";

describe('somme', function() {
  it('2 + 3 devrait être égal à 5', function() {
    assert.strictEqual(somme(2, 3), 5);
  });

  it('-10 + 5 devrait être égal à -5', function() {
    assert.strictEqual(somme(-10, 5), -5);
  });

  it('0 + 0 devrait être égal à 0', function() {
    assert.strictEqual(somme(0, 0), 0);
  });

  it('2.5 + 3.7 devrait être égal à 6.2', function() {
    assert.strictEqual(somme(2.5, 3.7), 6.2);
  });

  it('999999999 + 1 devrait être égal à 1000000000', function() {
    assert.strictEqual(somme(999999999, 1), 1000000000);
  });
});

