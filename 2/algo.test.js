import assert from "assert";
import estPair from "./algo.js";

// Suite de tests
describe("estPair", () => {
  it("renvoie true si le nombre est pair", () => {
    const result = estPair(4);
    assert.strictEqual(result, true);
  });

  it("renvoie false si le nombre est impair", () => {
    const result = estPair(3);
    assert.strictEqual(result, false);
  });

  it("renvoie true pour 0", () => {
    const result = estPair(0);
    assert.strictEqual(result, true);
  });
});

console.log('\x1b[32m%s\x1b[0m', '✅ Tous les tests ont été validés avec succès ! 🎉');