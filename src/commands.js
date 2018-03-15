import { Character } from './../src/character';
import { Room } from './../src/room';
import { Item } from './../src/item';
import { NPC } from './../src/npc';
import { Ship } from './../src/ship';
import { Game } from './../src/game';

export class Commands {
  constructor(id, name, special) {
  this.id = id;
  this.name = name;
  this.special = special;
  }

  Move(aGame, newLocation) {
    aGame.setLocation(newLocation);
  }

  Inventory(aPC){
    let items = aPC.getInventory();
    let msg = "Your Items: \n";

    for (var i = 0; i < items.length; i++)
    {
      msg += items[i].getName() + "\n";
    }
    return (msg);
  }

}
// exports.gameModule = Game;
