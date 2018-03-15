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

  it('should set lvl to 11', function() {
    var character = new Character("Zena", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
    character.setLvl(11);
    console.log("Get lvl:" + character.getLvl());
    expect(character.lvl).toEqual(11);
  });

  it('should get lvl', function() {
    var character = new Character("Zena", 0, 0, 0, 0, 0, 11, 0, 0, "", "");
    let x = 0;
    x = character.getLvl();
    expect(x).toEqual(11);
  });
});
