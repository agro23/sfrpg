// constructor(name, shortDesc, longDesc, map, xp, damageLog, orbit, special)
var Ship = require('./../src/ship.js').shipModule;

describe('Ship', function() {
  it('should set orbit', function() {
    let ship1 = new Ship("", "", "", [], 0, [], true, "");
    ship1.setOrbit(false);
    expect(ship1.orbit).toEqual(false);
  });

  it('should change damage log', function() {
    let ship = new Ship("", "", "", [], 0, [], true, "");
    let x = ship.getDamageLog();
    x.push(12);
    ship.setDamageLog(x);
    expect(ship.getDamageLog().length).toEqual(1);
  });

  it('show map', function() {
    let x = [0,0,2,3,0,4,5,0,0,0,0,];
    let ship1 = new Ship("", "", "", x, 0, [], true, "");
    expect(ship1.getMap()).toEqual(x);
  });

  it('should reduce xp', function() {
    let ship = new Ship("", "", "", [], 10000, [], true, "");
    let x = ship.getXp();
    x = x+1;
    ship.setXp(x);
    expect(ship.xp).toEqual(10001);
  });
});
