import './styles.css';
import { Character } from './character';
import { Room } from './room';
import { Item } from './item';
import { NPC } from './npc';
import { Ship } from './ship';import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let myPC = new Character("", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
  myPC.setName("Zena");
  console.log(myPC.getName());

  // export class Game {
  //   constructor(location, turn, map, domain) {
  //   this.location = location;
  //   this.turn = turn;
  //   this.map = map;
  //   this.domain = domain;
  // }
  //   getShipMap(){
  //     var shipMap = [
  //       [0,0,0,0,0,0,0,0,0,0,0],
  //       [0,0,2,3,0,4,5,0,0,0,0],
  //       [1,0,0,0,7,0,1,0,0,0,0],
  //       [1,0,2,0,0,0,4,0,0,0,0],
  //       [1,0,3,0,0,0,5,0,0,0,0],
  //       [1,0,1,0,6,0,0,0,0,0,0],
  //       [5,9,10,0,8,0,0,0,0,0,0],
  //       [2,0,0,0,8,12,11,0,0,0,0],
  //       [8,7,0,0,0,0,0,6,0,0,0]
  //     ];
  //     return shipMap;
  //   }
  //
  //
  // }
  // exports.gameModule = Game;

});
