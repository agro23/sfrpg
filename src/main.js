import { Character } from './character';
import { Room } from './room';
import { Item } from './item';
import { NPC } from './npc';
import { Ship } from './ship';
import { Game } from './game';
import { Commands } from './commands';


import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function createCharacter(name){
  // constructor(name, int, con, str, agl, xp, lvl, hp, mp, inventory, special) {

  // let theCharacter = new Character("", 0, 0, 0, 0, 0, 0, 0, 0, [], "");
  let theCharacter = new Character(name, 10, 10, 10, 10, 0, 1, 10, 10, [], "");
  console.log(theCharacter.getName());
  // get a name
  // roll stats
  // display stats to screen
  // let them adjust then finalize
  // roll hp and xp
  // push starting items to the inventory
  return theCharacter;
}

function initialize (){

}

function title() {}
function description() {}
function longDescription(){}
function npcs() {}
function items() {}
function commands() {}

function exits(aGame) {
  console.log("The exits are: ");
  // console.log("aGame is : " + aGame);
  // var myRoom = aGame.getShipMap();

  let myRoom = aGame.getShipMap()[aGame.getLocation()];
  // var moreMyRoom = myRoom[aGame.getLocation];
  console.log("Get Ship Map is: " + aGame.getShipMap());
  console.log("Get Location is: " + aGame.getLocation());
  console.log("My room is: " + myRoom);
  // console.log("My baboon is: " + baboon);

  let msg = "<div class='form-group'>";
  let myExits = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest", "Up", "Down", "Hidden"];
  // let click="onclick='this.form.label.value=';"
  // for (var i = 0; i  < myRoom.length; i++) {
    // if (myRoom[i] > 0)
    // {
    //   msg += "<a " + click +  i + "';>" + myExits[i] + "</a>";
    // }
  // }
  let click="onclick=\"this.form.label.value=";
  for (var i = 0; i  < myRoom.length; i++) {
    if (myRoom[i] > 0)
    {
      msg += "<a " + click +  "'" + i + "'>" + myExits[i] + "</a>";
    }
  }
  msg+="</div>";
  return msg;
}




$(document).ready(function() {
  // let myPC = new Character("", 0, 0, 0, 0, 0, 0, 0, 0, [], "");
  let myGame = new Game(1,1,1,1);
  let myPC = createCharacter("Zena");
  // myPC.setName("Zena");
  console.log(myPC.getName());
  myGame.setLocation(5);
  console.log(myGame.getLocation());
  let myCommands = new Commands(1, "", []);
  let temp = myPC.getInventory();
  temp.push(1);
  myPC.setInventory(temp);

  let quit = false;
  let timer = 1;
  let exitOutput = "";

  exitOutput = exits(myGame);
    $("#doors").append(exitOutput); // *************

  //
  // function one (myGame){
  //   console.log("I'm in one");
  //   // do some stuff
  //   let exitOutput = exits(myGame);
  //    $("#doors").html(exitOutput); // *************
  //    // $("#doors").append("banana"); //
  //   two(myGame);
  // }
  //
  // function two (myGame){
  //   console.log("I'm in two");
  //   // do some stuff
  //   three(myGame);
  // }
  //
  // function three (myGame){
  //   console.log("I'm in three");
  //   // do some stuff
  //   let x = prompt("Do you want to quit? Y/n")
  //   if (x != "Y") { one(myGame); }
  // }
  //
  //
  //
  //
  // one(myGame);
  // while (quit !==true){
  //   // quit = true;
  //   exitOutput = exits(myGame);
  //   $("#doors").append(exitOutput); // *************
  //   // $("#doors").append("banana"); // *************
  //
  //   timer++;
  //   alert("go on");
  //   if (timer > 5) { quit = true; }
  // }

  /*
    Show commands you can do:
    DO WE WANT TO APPEND THE COMMANDS TO THE SCREEN?
  */



});
