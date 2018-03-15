
import { Character } from './../src/character';
import { Room } from './../src/room';
import { Item } from './../src/item';
import { NPC } from './../src/npc';
import { Ship } from './../src/ship';
import { Game } from './../src/game';
import { Commands } from './../src/commands';



describe('Commands', function() {

  it('should check that Move changes player location in Game', function() {
    let myGame = new Game(1,1,1,1);
    let myCommands = new Commands(1, "", []);

    console.log(myGame.getDomain());
    let oldLocation = myGame.getLocation();
    let exits=0;
    if (myGame.getDomain() == 1) {
      exits = myGame.getShipMap()[oldLocation]; // array at index 1
      console.log(exits);
    }
    let choice = exits[3]; // this will be a link chosen from the screen in main.
    console.log("choice: " + choice);
    myCommands.Move(myGame, choice);
    console.log("myGame Location: " + myGame.getLocation());
    expect(myGame.getLocation()).toEqual(choice);
  });

  it('should do something else', function() {
    //
    // expect(true).toEqual(2);
  });

});
