import assert from 'assert';
import onlyPitbulls from './algo.js';

describe('onlyPitbulls', function() {
  it('should return an empty array if no Pitbulls are present', function() {
    const input = [
      {
        type: "Cat",
        race: "Chartreux",
        age: "4"
      }
    ];
    const expectedOutput = [];
    assert.deepStrictEqual(onlyPitbulls(input), expectedOutput);
  });

  it('should return only Pitbulls', function() {
    const input = [
      {
        type: "Dog", 
        race: "Pitbull", 
        age: "10"
      },
      {
        type: "Dog", 
        race: "Labrador", 
        age: "5"
      },
      {
        type: "Dog", 
        race: "Pitbull", 
        age: "3"
      }
    ];
    const expectedOutput = [
      {
        type: "Dog", 
        race: "Pitbull", 
        age: "10"
      },
      {
        type: "Dog", 
        race: "Pitbull", 
        age: "3"
      }
    ];
    assert.deepStrictEqual(onlyPitbulls(input), expectedOutput);
  });
});