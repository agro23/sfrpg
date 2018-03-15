import { Character } from './../src/character';
import { Room } from './../src/room';
import { Item } from './../src/item';
import { NPC } from './../src/npc';
import { Ship } from './../src/ship';
import { Commands } from './../src/commands';

export class Game {
  constructor(location, turn, map, domain, items) {
  this.location = location;
  this.turn = turn;
  this.map = map;
  this.domain = domain;
  this.items = items;
}

getShipMap() {
    this.map = [
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
    return this.map;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  getDomain() {
    return this.domain;
  }

makeRooms() {
  let shipRooms = [];
  // loop through dB
  // constructor(id, name, shortDesc, longDesc, light, doors, contents, npc, special)
  let myRoom = new Room(1, "The Bridge",
  "This looks like the bridge of the starship. It is full of equipment but devoid of people.",
  "This is the ship's bridge. It is a hive of electronic activity. The red emergency lighting casts strange shadows across the flickering control consoles and the empty chairs in front of them. There is not a soul to be seen. Readouts on some of the still-working monitors indicate that the ship has come to a stop in orbit around a class M planet. A diagram on the wall indicates various statistics about the world below but it makes no sense to you. The main view screen is dark.",
  true,
  [],
  [2],
  [], "");
  shipRooms.push(myRoom);
  myRoom = new Room(2, "The Science Lab",
  "This is the room where you woke up. It is a lab full of scientific equipment well beyond your comprehension.",
  "This is the main science and research lab for the ship. It also doubles as the medical bay. There are two large metal tables in the middle of the room. On one of them is the hypersleep pod you had been hibernating in.",
  true,
  [],
  [1],
  [], "");
  return shipRooms;
  // end loop through dB
}

makeItems(){
  let shipItems = [];
  // loop through dB
  // id, name, type, desc, xp, special, broken, contained, containedBy, contains
  let myItem = new Item(1, "Crowbar", "Tool", "A long slender flat piece of carbon fiber, stronger than steel, slightly flexible and cool to the touch.", 5, "10", false, false, 0, -1);
  shipItems.push(myItem);
  myItem = new Item(2, "Fusion Pistol", "Weapon", "A sleek-barreled blaster with a red fin at the tip and a bulbous silver reaction chamber. It seems the gene-sensing trigger guard has been disabled.", 25, "100", false, false, 0, -1);
  shipItems.push(myItem);
  // end loop through dB
  return(shipItems);
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
