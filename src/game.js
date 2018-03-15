
import { Character } from './character';
import { Room } from './room';
import { Item } from './item';
import { NPC } from './npc';
import { Ship } from './ship';

export class Game {
  constructor(location, turn, map, domain) {
  this.location = location;
  this.turn = turn;
  this.map = map;
  this.domain = domain;
}

getShipMap() {
    var shipMap = [
      [0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,3,0,4,5,0,0,0,0],
      [1,0,0,0,7,0,1,0,0,0,0],
      [1,0,2,0,0,0,4,0,0,0,0],
      [1,0,3,0,0,0,5,0,0,0,0],
      [1,0,1,0,6,0,0,0,0,0,0],
      [5,9,10,0,8,0,0,0,0,0,0],
      [2,0,0,0,8,12,11,0,0,0,0],
      [8,7,0,0,0,0,0,6,0,0,0]
    ];
    return shipMap;
  }
  /*
  Your location
  turn #
  map(s)
  domain[ship, planet, swarm, dream]
  */
//
//
//     // [9, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [10, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [11, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [12, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [13, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [14, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [15, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [16, [0,0,2,3,0,4,5,0,0,0,0]],
//     // [17, [0,0,2,3,0,4,5,0,0,0,0]]
}
exports.gameModule = Game;
