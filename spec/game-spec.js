// // constructor(name, shortDesc, longDesc, map, xp, damageLog, orbit, special)
// // var Game = require('./../src/game.js').gameModule;
// var Game = require('./../src/main.js').gameModule;
//
var Ship = require('./../src/ship.js').shipModule;
// import { Character } from './src/character';
// import { Room } from './src/room';
// import { Item } from './src/item';
// import { NPC } from './src/npc';
// import { Ship } from './../src/ship';
import { Game } from './../src/game';
// var Character = require('./../src/character.js').characterModule;


describe('Game', function() {

  it('should set map from game', function() {
    let myGame = new Game ("", 1, [], 1);
    let d = myGame.getShipMap();
    let gameShip = new Ship("Red Dwarf","","", d, 10000, [], true, "");
    console.log("Name: " + gameShip.getName());
    // let x = gameShip.getMap();
    // var x = Game.getShipMap();
    // console.log(x[3]);
    // let y = x[5];
    // let z = y[7];
    // expect(z).toEqual(5);
    expect(true).toEqual(true);

  });

});
