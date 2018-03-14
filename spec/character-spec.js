var Character = require('./../src/character.js').characterModule;

describe('Character', function() {
  it('should set characters name', function() {
    var character = new Character("", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
    expect(character.name).toEqual("");
  });

  it('should set characters name to "Zena"', function() {
    var character = new Character("Zena", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
    expect(character.name).toEqual("Zena");
  });

  it('should set myPC.name to "Zena"', function() {
    let myPC = new Character("", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
    myPC.setName("Zena");
    console.log(myPC.name);
    expect(myPC.name).toEqual("Zena");
  });
});
