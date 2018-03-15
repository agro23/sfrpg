// // constructor(name, shortDesc, longDesc, map, xp, damageLog, orbit, special)
// // var Game = require('./../src/game.js').gameModule;
// var Game = require('./../src/main.js').gameModule;
//
// var Character = require('./../src/character.js').characterModule;
// var Item = require('./../src/item.js').itemModule;
// var Npc = require('./../src/npc.js').npcModule;
// var Room = require('./../src/ship.js').shipModule;
// var Ship = require('./../src/ship.js').shipModule;
//

import { Character } from './../src/character';
import { Room } from './../src/room';
import { Item } from './../src/item';
import { NPC } from './../src/npc';
import { Ship } from './../src/ship';
import { Game } from './../src/game';
// var Character = require('./../src/character.js').characterModule;


describe('Game', function() {

  it('should set map from game', function() {
    let myGame = new Game ("", 1, [], 1);
    let d = myGame.getShipMap();
    let gameShip = new Ship("Red Dwarf","","", d, 10000, [], true, "");
    console.log("Name: " + gameShip.getName());
    console.log("Ship Map: " + myGame.getShipMap());
    let x = gameShip.getMap();
    // var x = Game.getShipMap();
    // console.log(x[3]);
    // let y = x[5];
    // let z = y[7];
    // expect(z).toEqual(5);
    expect(x).toEqual(d);
  });

  it('should get a room # from the map', function() {
    let myGame = new Game ("", 1, [], 1);
    let d = myGame.getShipMap();
    let gameShip = new Ship("Red Dwarf","","", d, 10000, [], true, "");
    // console.log("Name: " + gameShip.getName());
    // console.log("Ship Map: " + myGame.getShipMap());
    let x = gameShip.getMap();

    let z = x[3][2];
    expect(z).toEqual(2);
  });

  it('should get a domain # from Game', function() {
    let myGame = new Game ("", 1, [], 1);
    let d = myGame.getDomain();
    expect(d).toEqual(1);
  });

});
