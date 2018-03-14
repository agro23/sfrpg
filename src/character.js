class Character {
  constructor(name, int, con, str, agl, xp, lvl, hp, mp, inventory, special) {
  this.name = name;
  this.int = int;
  this.con = con;
  this.str = str;
  this.agl = agl;
  this.xp = xp;
  this.lvl = lvl;
  this.hp = hp;
  this.mp = mp;
  this.inventory = inventory;
  this.special = special;
}
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

exports.characterModule = Character;
