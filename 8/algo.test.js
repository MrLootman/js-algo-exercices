import assert from 'assert';
import mocha from "mocha";
import ageOfDogs from './algo.js';

describe('ageOfDogs', function() {
  it('should return 0 if there are no dogs', function() {
    const input = [
      {
        type: "Cat",
        race: "Chartreux",
        age: 4
      }
    ];
    const expectedOutput = 0;
    assert.strictEqual(ageOfDogs(input), expectedOutput);
  });

  it('should return the sum of ages for all dogs', function() {
    const input = [
      {
        type: "Dog", 
        race: "Pitbull", 
        age: 10
      },
      {
        type: "Dog", 
        race: "Labrador", 
        age: 5
      },
      {
        type: "Cat", 
        race: "Siamese", 
        age: 3
      },
      {
        type: "Dog", 
        race: "Pitbull", 
        age: 3
      }
    ];
    const expectedOutput = 18;
    assert.strictEqual(ageOfDogs(input), expectedOutput);
  });
});
